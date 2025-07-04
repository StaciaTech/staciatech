
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-stacia-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-2xl flex items-center justify-center mb-8 mx-auto animate-float">
          <span className="text-white font-bold text-3xl font-space">S</span>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-bold stacia-text-gradient mb-8 animate-fade-in">
          Stacia Tech
        </h1>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="stacia-loading-bar mb-4">
            <div 
              className="stacia-loading-progress transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress Text */}
          <div className="text-stacia-gray-600 text-sm font-medium">
            Loading Innovation... {progress}%
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-stacia-gray-500 mt-8 animate-fade-in animation-delay-400">
          Preparing your digital future
        </p>
      </div>

      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full animate-pulse animation-delay-200" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-vibrant-purple/5 rounded-full animate-pulse animation-delay-600" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-electric-cyan/5 rounded-full animate-pulse animation-delay-400" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
