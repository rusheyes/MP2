import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from '../components/Navbar2';
import '../styles/main.css';
import Footer from '../components/Footer';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <CustomNav />
        </div>  
      </header>    
      <main>
        <div>
          <Login />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
