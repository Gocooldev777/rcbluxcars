import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import { SearchBar } from './components/layout/SearchBar'
import { Hero } from './components/home/Hero'
import { AboutUs } from './components/home/AboutUs'
import { Vision } from './components/home/Vision'
import { CarGrid } from './components/home/CarGrid'
import { Footer } from './components/layout/Footer'
import PrivacySettings from './components/PrivacySettings'
import ShowroomCars from './components/home/ShowroomCars'
import ManageBooking from './components/booking/ManageBooking'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ContactUs from './components/contact/ContactUs'
import VehicleAgreement from './components/booking/VehicleAgreement'
import VehicleUploadForm from './Cloudinary/VehicleUploadForm'
import Premium from './components/premiums/Premium'
import { PremiumSection } from './components/premiums/PremiumSection'
import { OurService } from './components/home/OurService'
import './App.css'

function App() {
  const [isPremiumOpen, setIsPremiumOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen w-full bg-black">
        <Navbar />
        <div className="pt-[72px]">
          <SearchBar />
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Contact Route */}
              <Route path="/contact" element={<ContactUs />} />

              {/* Vehicle Upload Route */}
              <Route path="/upload" element={
                <>
                  <div className="bg-black py-8">
                    <VehicleUploadForm />
                  </div>
                  <PremiumSection />
                  <CarGrid />
                  <OurService />
                  <Footer setIsPremiumOpen={setIsPremiumOpen} />
                </>
              } />

              {/* Vehicle Agreement Route */}
              <Route path="/vehicle-agreement" element={
                <>
                  <VehicleAgreement />
                  <PremiumSection />
                  <CarGrid />
                  <OurService />
                  <Footer setIsPremiumOpen={setIsPremiumOpen} />
                </>
              } />

              {/* Main Routes */}
              <Route path="/" element={
                <>
                  <Hero />
                  <PremiumSection />
                  <CarGrid />
                  <OurService />
                  <Footer setIsPremiumOpen={setIsPremiumOpen} />
                </>
              } />

              {/* Other Routes */}
              <Route path="/showroom" element={
                <>
                  <ShowroomCars />
                  <PremiumSection />
                  <CarGrid />
                  <OurService />
                  <Footer setIsPremiumOpen={setIsPremiumOpen} />
                </>
              } />
              <Route path="/manage-booking" element={
                <>
                  <ManageBooking />
                  <PremiumSection />
                  <CarGrid />
                  <OurService />
                  <Footer setIsPremiumOpen={setIsPremiumOpen} />
                </>
              } />
            </Routes>
            <PrivacySettings />
          </div>
        </div>
        <Premium isOpen={isPremiumOpen} onClose={() => setIsPremiumOpen(false)} />
      </div>
    </Router>
  )
}

export default App
