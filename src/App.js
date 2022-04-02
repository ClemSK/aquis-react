import React from 'react';
import Hero from './components/Hero';
import CompanyStrategy from './components/CompanyStrategy';
import Chart from './components/Chart';
import ContextualInfo from './components/ContextualInfo';

function App() {
  return (
    <div className="App">
      <Hero />
      <CompanyStrategy />
      <Chart />
      <ContextualInfo />
    </div>
  );
}

export default App;
