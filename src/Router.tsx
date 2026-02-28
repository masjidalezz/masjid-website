import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import EventCalendar from "@/pages/EventCalendar";
import Programs from "@/pages/Programs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";

// Temporary: both routes redirect to LaunchGood. To revert, remove LAUNCHGOOD_URL and restore the originals.
const LAUNCHGOOD_URL = 'https://www.launchgood.com/v4/pledge/support_something_special_help_keep_masjid_al_ezz_running_1';
const DONATE_URL = LAUNCHGOOD_URL; // original: 'https://app.irm.io/masjidalezz.com/where-most-needed'
const FUNDRAISER_URL = LAUNCHGOOD_URL; // original: 'https://app.irm.io/masjidalezz.com/payoffmasjidloan'

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle redirects from 404.html
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  // Handle hash-based routing for /#donate
  useEffect(() => {
    if (window.location.hash === '#donate') {
      window.location.href = DONATE_URL;
    }
  }, [location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<EventCalendar />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route 
        path="/fundraiser" 
        element={
          <FundraiserRedirect />
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Component to handle external redirect
const FundraiserRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = FUNDRAISER_URL;
  }, []);
  
  return null;
};

export default AppRoutes;
