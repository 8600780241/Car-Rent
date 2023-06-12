import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PaymentDetails from '../Payment/PaymentDetails';

export const DataContext = React.createContext();

const ParentComponent = () => {
  const [savedData, setSavedData] = useState(null);

  const saveData = (data) => {
    setSavedData(data);
  };

  return (
   
        <DataContext.Provider value={{ saveData ,setSavedData}}>
         <PaymentDetails/>
        </DataContext.Provider>
    
  );
};

export default ParentComponent;
