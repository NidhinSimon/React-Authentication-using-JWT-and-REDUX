import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, []);

  return (
    loading && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <ClipLoader size={60} animation="spin-fast"  thickness={440} color={'#FF4900'} loading={true} />
      </div>
    )
  );
};

export default Loader