// pages/DisplayData.tsx
import { useState, useEffect } from 'react';

const DisplayData = () => {

const [isEditable, setIsEditable] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('personalDetails');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('personalDetails', JSON.stringify(formData));
    alert('Data updated and saved!');
    setIsEditable(false);
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Display Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="firstName">
              First Name
            </label>
            <input
              className={`text-black w-full px-3 py-2 border ${isEditable ? 'border-blue-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${isEditable ? 'focus:ring-blue-500' : ''} transition-colors duration-300`}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              readOnly={!isEditable}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="lastName">
              Last Name
            </label>
            <input
              className={`text-black w-full px-3 py-2 border ${isEditable ? 'border-blue-300 ' : 'border-gray-300 '} text-black rounded-lg focus:outline-none focus:ring-2 ${isEditable ? 'focus:ring-blue-500 ' : ''} transition-colors duration-300 `}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              readOnly={!isEditable}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className={`text-black w-full px-3 py-2 border ${isEditable ? 'border-blue-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${isEditable ? 'focus:ring-blue-500' : ''} transition-colors duration-300`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditable}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              className={`text-black w-full px-3 py-2 border ${isEditable ? 'border-blue-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${isEditable ? 'focus:ring-blue-500' : ''} transition-colors duration-300`}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={!isEditable}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="address">
              Address
            </label>
            <input
              className={`text-black w-full px-3 py-2 border ${isEditable ? 'border-blue-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${isEditable ? 'focus:ring-blue-500' : ''} transition-colors duration-300`}
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              readOnly={!isEditable}
              required
            />
          </div>
          {isEditable && (
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              type="submit"
            >
              Save Changes
            </button>
          )}
        </form>
        <button
          className={`w-full mt-4 ${isEditable ? 'bg-red-500' : 'bg-green-500'} text-white py-2 rounded-lg hover:${isEditable ? 'bg-red-600' : 'bg-green-600'} transition-colors duration-300`}
          onClick={toggleEditMode}
        >
          {isEditable ? 'Cancel' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default DisplayData;
