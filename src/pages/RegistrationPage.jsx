import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from '../components/Navbar2';
import '../styles/main.css';
import Footer from '../components/Footer';
import RegistrationComponent from '../components/Registration';


const RegistrationPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <CustomNav />
        </div>  
      </header>    
      <main>
        <div className='regdes'>
          <RegistrationComponent />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RegistrationPage;