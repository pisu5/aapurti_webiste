import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Featured from './pages/Featured';

import ServicesLayout from './layouts/Servicelayout';
import ServicesHome from './pages/ServicesHome';
import HomePage from './pages/HomePage';
import NewsletterSubscribe from './components/FormNewsLetter';
import Careers from './pages/Careers';
import CropSurveyService from './pages/CropSurveys';
import CropCuttingExperiment from './pages/CCEService';
import About from './components/AboutUs';
import Blogs from './pages/Blogs';

import BusinessTillDate from './pages/Business';
import CropHealthMonitoring from './pages/CHM';
import QC from './pages/QC';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Featured />} />
        <Route path="/newsletter" element={<NewsletterSubscribe />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<ServicesHome />} />
          <Route path="crop-surveys" element={<CropSurveyService />} />
          <Route path="cce" element={<CropCuttingExperiment />} />
          <Route path="pmfby-qc" element={<QC />} />
          <Route path="crop-health" element={<CropHealthMonitoring />} />

          {/* 
         
         
          */}
        </Route>


      </Routes>
    </>
  );
}

export default App;
