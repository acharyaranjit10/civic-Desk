import React from 'react';

const LoadingSpinner = ({ size = 'large', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={`animate-spin rounded-full border-b-2 border-nepal-blue ${sizeClasses[size]}`}
      ></div>
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;