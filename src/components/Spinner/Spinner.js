import React from 'react';
import { SpinnerCircular } from 'spinners-react';
const Spinner = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#1f1137',
    }}
  >
    <SpinnerCircular size={100} color={'white'} />
  </div>
);

export default Spinner;
