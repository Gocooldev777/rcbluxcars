import { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const VehicleUploadForm = () => {
    const [vehicleData, setVehicleData] = useState({
        image: '',
        vehicleName: '',
        numberOfSeats: '',
        type: '',
        transmission: ''
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [submitStatus, setSubmitStatus] = useState('');

    // Initialize Cloudinary
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzonwo3nn'
        }
    });

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);

            // Create form data for upload
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'RCB_Cloudinary');

            try {
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/dzonwo3nn/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );
                const data = await response.json();
                setVehicleData(prev => ({
                    ...prev,
                    image: data.secure_url
                }));
            } catch (error) {
                console.error('Error uploading image:', error);
                setSubmitStatus('Failed to upload image');
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehicleData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Saving...');

        try {
            if (!vehicleData.image) {
                setSubmitStatus('Please upload an image first');
                return;
            }

            const response = await fetch('/api/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vehicleData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('Vehicle added successfully!');
                // Reset form
                setVehicleData({
                    image: '',
                    vehicleName: '',
                    numberOfSeats: '',
                    type: '',
                    transmission: ''
                });
                setPreviewImage(null);
            } else {
                setSubmitStatus(result.message || 'Failed to save vehicle data');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('Failed to save vehicle data: ' + error.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-6 p-6 rounded-lg border border-[#B8860B] bg-[#000000]">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#B8860B]">Vehicle Upload Form</h2>
            {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg text-center ${submitStatus.includes('success')
                    ? 'bg-green-900 text-green-100'
                    : submitStatus.includes('Failed')
                        ? 'bg-red-900 text-red-100'
                        : 'bg-[#B8860B] text-white'
                    }`}>
                    {submitStatus}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-[#B8860B]">
                        Vehicle Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-24 border-2 border-[#B8860B] border-dashed rounded-lg cursor-pointer hover:bg-gray-900 transition-all">
                            <div className="flex flex-col items-center justify-center pt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-[#B8860B]">
                                    Select a photo
                                </p>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="opacity-0"
                            />
                        </label>
                    </div>
                    {previewImage && (
                        <div className="mt-2">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-full h-40 object-cover rounded-lg border border-[#B8860B]"
                            />
                        </div>
                    )}
                </div>

                {/* Vehicle Name */}
                <div>
                    <label className="block text-lg font-medium text-[#B8860B] mb-1">
                        Vehicle Name
                    </label>
                    <input
                        type="text"
                        name="vehicleName"
                        value={vehicleData.vehicleName}
                        onChange={handleInputChange}
                        className="w-full p-2.5 bg-gray-900 border border-[#B8860B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                        required
                    />
                </div>

                {/* Number of Seats */}
                <div>
                    <label className="block text-lg font-medium text-[#B8860B] mb-1">
                        Number of Seats
                    </label>
                    <input
                        type="number"
                        name="numberOfSeats"
                        value={vehicleData.numberOfSeats}
                        onChange={handleInputChange}
                        className="w-full p-2.5 bg-gray-900 border border-[#B8860B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                        required
                        min="1"
                    />
                </div>

                {/* Vehicle Type */}
                <div>
                    <label className="block text-lg font-medium text-[#B8860B] mb-1">
                        Vehicle Type
                    </label>
                    <select
                        name="type"
                        value={vehicleData.type}
                        onChange={handleInputChange}
                        className="w-full p-2.5 bg-gray-900 border border-[#B8860B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="sedan">Sedan</option>
                        <option value="compact-suv">Compact SUV</option>
                        <option value="suv">SUV</option>
                        <option value="sports">Sports</option>
                        <option value="hyper-car">Hyper Car</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="off-road">Off Road</option>
                    </select>
                </div>

                {/* Transmission Type */}
                <div>
                    <label className="block text-lg font-medium text-[#B8860B] mb-1">
                        Transmission Type
                    </label>
                    <select
                        name="transmission"
                        value={vehicleData.transmission}
                        onChange={handleInputChange}
                        className="w-full p-2.5 bg-gray-900 border border-[#B8860B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                        required
                    >
                        <option value="">Select Transmission</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-3 mt-2 bg-[#B8860B] text-white text-lg font-semibold rounded-lg hover:bg-[#9A7B11] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2 focus:ring-offset-black"
                >
                    Upload Vehicle
                </button>
            </form>
        </div>
    );
};

export default VehicleUploadForm; 