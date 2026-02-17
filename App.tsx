
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Committee from './pages/Committee';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Site Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/committee" element={<Layout><Committee /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/membership" element={<Layout><Membership /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
