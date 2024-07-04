'use client'
// components/Modal.tsx
import React, { ReactNode } from 'react';
import PersonalDetails from '@/components/personalDetails';
import { FormDataProvider } from '../../context/FormDataContext';

const details = () => {
  return (
    <FormDataProvider>
    <PersonalDetails/>
    </FormDataProvider>
  );
};

export default details;
