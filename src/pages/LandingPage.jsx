import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/Navbar';
import '../styles/main.css';
import AppHero from '../components/Hero';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <div className="overlay"></div>
          <CustomNavbar />
        </div>  
      </header>
      <main>
        <div>
          <AppHero />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
