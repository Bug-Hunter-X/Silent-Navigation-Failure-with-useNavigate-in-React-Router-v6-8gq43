import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Solution = () => {
  const [dataReady, setDataReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDataReady(true);
    };
    fetchData();
  }, []);

  const handleNavigate = () => {
    if (dataReady) {
      navigate('/destination');
    } else {
      console.log('Data not ready yet!');
    }
  };

  return (
    <div>
      <button onClick={handleNavigate}>Navigate (Safe)</button>
    </div>
  );
};
export default Solution;