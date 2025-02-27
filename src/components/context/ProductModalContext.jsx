import React, { createContext, useContext, useState, useCallback } from 'react';

const ProductModalContext = createContext(null);

export const ProductModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentProduct: null
  });

  const openModal = useCallback((product) => {
    // Close any existing modal first
    if (modalState.isOpen) {
      // Brief delay to allow for transition effects
      setModalState(prev => ({ ...prev, isOpen: false }));
      
      setTimeout(() => {
        setModalState({
          isOpen: true,
          currentProduct: product
        });
      }, 50); // Match with CSS transition duration
    } else {
      // Open modal directly if none is currently open
      setModalState({
        isOpen: true,
        currentProduct: product
      });
    }
  }, [modalState.isOpen]);

  const closeModal = useCallback(() => {
    // Start closing animation
    setModalState(prev => ({
      ...prev,
      isOpen: false
    }));
    
    // Reset state after animation completes
    setTimeout(() => {
      setModalState({
        isOpen: false,
        currentProduct: null
      });
    }, 300); // Match with CSS transition duration
  }, []);

  return (
    <ProductModalContext.Provider value={{ 
      isOpen: modalState.isOpen, 
      currentProduct: modalState.currentProduct, 
      openModal, 
      closeModal 
    }}>
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error('useProductModal must be used within a ProductModalProvider');
  }
  return context;
};
