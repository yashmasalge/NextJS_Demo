// pages/_app.tsx
import type { AppProps } from 'next/app';
import { FormDataProvider } from '../context/FormDataContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
  );
}

export default MyApp;
