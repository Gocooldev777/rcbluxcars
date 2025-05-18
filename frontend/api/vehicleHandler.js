import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function saveVehicle(req) {
    try {
        // Ensure the path is correct
        const filePath = path.join(__dirname, '..', 'src', 'Cloudinary', 'data.json');
        console.log('Saving to:', filePath); // Debug log

        // Read existing data
        let data = { vehicles: [] };
        try {
            const fileContent = await fs.readFile(filePath, 'utf8');
            data = JSON.parse(fileContent);
        } catch (error) {
            // If file doesn't exist or can't be read, we'll create it
            console.log('Creating new data file');
            // Ensure directory exists
            await fs.mkdir(path.dirname(filePath), { recursive: true });
        }

        // Add new vehicle data
        const newVehicle = {
            ...req.body,
            id: Date.now(),
            createdAt: new Date().toISOString()
        };
        data.vehicles.push(newVehicle);

        // Write back to file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Data saved successfully'); // Debug log

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Vehicle added successfully',
                vehicle: newVehicle
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            }
        );
    } catch (error) {
        console.error('Error saving vehicle:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error saving data',
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            }
        );
    }
} 