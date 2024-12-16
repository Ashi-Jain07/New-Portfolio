import React, { useState, useEffect, useRef } from 'react';

function TechnicalSkills({ skill, percentage }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold for when animation should start
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && progress < percentage) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 1, percentage)); // Increment progress
      }, 20); // Adjust speed of animation (lower is faster)
      return () => clearTimeout(timer);
    }
  }, [isVisible, progress, percentage]);

  return (
    <div className="pb-2" ref={ref}>
      <h2 className="text-lg font-medium text-white">{skill}</h2>
      <div className="relative w-11/12 h-5 bg-gray-700 rounded-md overflow-hidden">
        <div
          className="bg-purple-400 h-full"
          style={{
            width: `${progress}%`,
            transition: 'width 0.5s ease-out',
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default TechnicalSkills;