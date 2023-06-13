import React, { useContext } from 'react';
import { DataContext } from './ParentComponent';

const PaymentDetails = () => {
  const { savedData } = useContext(DataContext);

  return (
    <div>
      <h2>Payment Details</h2>
      {savedData ? (
        <div>
          <p>Selected Car: {savedData.name}</p>
          {/* Render payment details using the savedData */}
        </div>
      ) : (
        <p>No car selected</p>
      )}
    </div>
  );
};

export default PaymentDetails;
