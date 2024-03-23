import React from 'react';

const CustomBackgroundComponent = () => {
  return (
    <div className="relative">
      {/* Ellipse 1 */}
      <div className="absolute w-470 h-470 bg-pink-500 -left-72 top-1092"></div>
      {/* Ellipse 2 */}
      <div className="absolute w-470 h-470 bg-purple-700 left-51 top-728"></div>
      {/* Ellipse 7 */}
      <div className="absolute w-656 h-561 bg-pink-600 left-850 top-1073"></div>
      {/* Ellipse 8 */}
      <div className="absolute w-470 h-470 bg-pink-200 left-755 top-660"></div>
      {/* Ellipse 4 */}
      <div className="absolute w-606 h-606 bg-orange-300 left-430 top-1073"></div>
      {/* Ellipse 5 */}
      <div className="absolute w-606 h-606 bg-pink-800 left-941 top-493"></div>
      {/* Ellipse 6 */}
      <div className="absolute w-606 h-606 bg-indigo-900 left-335 top-436"></div>
      {/* Ellipse 3 */}
      <div className="absolute w-470 h-470 bg-indigo-800 -left-184 top-349"></div>
      {/* Rectangle 1 */}
      <div className="absolute w-full h-1024 bg-pink-300 bg-opacity-30 bottom-0"></div>
    </div>
  );
};

export default CustomBackgroundComponent;
