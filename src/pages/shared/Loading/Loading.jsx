import React from 'react';
import { Mosaic } from 'react-loading-indicators';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Mosaic color="oklch(72.3% 0.219 149.579)" size="small" text="" textColor="" />
    </div>
  );
};

export default Loading;
