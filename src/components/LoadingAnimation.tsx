
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // GSAP animation for logo
    gsap.fromTo('.logo-container', 
      { scale: 0.5, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.7)' }
    );

    // Floating animation
    gsap.to('.logo-container', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    // Progress animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Enhanced exit animation
          gsap.to('.loading-screen', {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onComplete
          });
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    // Animate progress bar
    gsap.to('.progress-fill', {
      width: `${progress}%`,
      duration: 0.1,
      ease: 'none'
    });

    return () => clearInterval(timer);
  }, [onComplete, progress]);

  return (
    <div className="loading-screen fixed inset-0 z-50 bg-gradient-to-br from-white via-gray-50 to-violet-50 flex items-center justify-center">
      <div className="text-center">
        {/* Enhanced Logo Animation */}
        <div className="logo-container w-24 h-24 bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl flex items-center justify-center mb-8 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
          <span className="text-white font-bold text-4xl font-space relative z-10">S</span>
        </div>

        {/* Brand Name with typing effect */}
        <h1 className="text-4xl font-bold stacia-text-gradient mb-8 font-space">
          Stacia Tech
        </h1>

        {/* Enhanced Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="progress-fill h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-violet-600 text-sm font-medium mt-3 font-space">
            Initializing Digital Excellence... {Math.round(progress)}%
          </div>
        </div>

        {/* Subtitle with fade in */}
        <p className="text-gray-600 animate-fade-in animation-delay-400">
          Crafting Tomorrow's Digital Experiences
        </p>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-600" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
