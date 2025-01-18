import { FC } from 'react';
import { Routes, Route } from 'react-router-dom'; // React Router DOM for navigation
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import AboutPage from '@/app/Components/About'; // Example: Replace with your actual About Page component
import FeaturesPage from '@/app/Components/Features'; // Example: Replace with your actual Features component
import Testimonials from '@/app/Components/Testimonials'; // Example: Replace with your actual Testimonials

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
};

export default AppRoutes;
