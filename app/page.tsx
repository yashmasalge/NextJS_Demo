'use client'
// pages/index.tsx
import Link from 'next/link';
import { FormDataProvider } from '../context/FormDataContext';

const Home = () => {
  return (
    <FormDataProvider>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Link legacyBehavior href="/details">
        <a className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go to Personal Details Form
        </a>
      </Link>
    </div>
    </FormDataProvider>
  );
};

export default Home;
