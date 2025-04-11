import React, { createContext, useState, ReactNode } from 'react';
import { ProductLayoutContextType } from './productLayoutTypes';

const ProductLayoutContext = createContext<ProductLayoutContextType | undefined>(undefined);

export { ProductLayoutContext };

interface ProductLayoutProviderProps {
  children: ReactNode;
}

export const ProductLayoutProvider: React.FC<ProductLayoutProviderProps> = ({ children }) => {
  const [layoutGrid, setLayoutGridState] = useState(true);
  const [layoutSlice, setLayoutSliceState] = useState(false);
  const [show, setShowState] = useState('12');
  const [sortByName, setSortByNameState] = useState('name');

  const setLayoutGrid = () => {
    setLayoutGridState(true);
    setLayoutSliceState(false);
  };

  const setLayoutSlice = () => {
    setLayoutGridState(false);
    setLayoutSliceState(true);
  };

  const setShow = (value: string) => {
    setShowState(value);
  };

  const setSortByName = (value: string) => {
    setSortByNameState(value);
  };

  const value = {
    layoutGrid,
    layoutSlice,
    show,
    sortByName,
    setLayoutGrid,
    setLayoutSlice,
    setShow,
    setSortByName,
  };

  return (
    <ProductLayoutContext.Provider value={value}>
      {children}
    </ProductLayoutContext.Provider>
  );
};
