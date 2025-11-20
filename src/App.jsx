import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProtectedGalleryPage from './pages/ProtectedGalleryPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeries" element={<GalleryPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/temoignages" element={<TestimonialsPage />} />
          <Route path="/galerie-privee" element={<ProtectedGalleryPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;