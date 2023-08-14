import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/Navbar2';
import '../styles/main.css';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const AboutUsPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <CustomNavbar />
        </div>  
      </header>
      <main className='main-content'>
        <div className='blogdes'>
          <AboutUs />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;