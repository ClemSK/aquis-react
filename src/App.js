import React from 'react';
import Hero from './components/Hero';
import CompanyStrategy from './components/CompanyStrategy';
import Chart from './components/Chart';
import ContextualInfo from './components/ContextualInfo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CompanyStrategy />
      <Chart />
      <ContextualInfo />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
