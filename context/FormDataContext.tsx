import { createContext, useState, ReactNode, useContext } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: ''
};

const FormDataContext = createContext<FormDataContextProps>({
  formData: initialFormData,
  setFormData: () => {},
});

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
