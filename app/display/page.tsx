'use client'
// components/Modal.tsx
import React, { ReactNode } from 'react';
import DisplayData from '@/components/displayData';
import { FormDataProvider } from '../../context/FormDataContext';

const display = () => {
  return (
    <FormDataProvider>
    <DisplayData/>
    </FormDataProvider>
  );
};

export default display;
