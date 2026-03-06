import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import EventCalendar from "@/pages/EventCalendar";
import Programs from "@/pages/Programs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import { LAUNCHGOOD_DONATE_URL } from "@/config";

// Temporary: both routes redirect to LaunchGood. To revert, restore the originals:
// DONATE_URL = 'https://app.irm.io/masjidalezz.com/where-most-needed'
// FUNDRAISER_URL = 'https://app.irm.io/masjidalezz.com/payoffmasjidloan'
const DONATE_URL = LAUNCHGOOD_DONATE_URL;
const FUNDRAISER_URL = LAUNCHGOOD_DONATE_URL;

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
