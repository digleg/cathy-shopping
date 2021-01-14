import React, { useEffect } from 'react';
import './App.css';
import RowWrapper from './components/RowWrapper';
import orderData from './orderData';

function App() {
  // useEffect(() => {
  //   console.log();
  // }, []);

  return (
    <div className="app">
      <RowWrapper data={orderData} status="true" />
      <RowWrapper data={orderData} status="false" />
    </div>
  );
}

export default App;
