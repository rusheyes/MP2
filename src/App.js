import React from 'react';
import { DataProvider } from './components/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
