import React, { useState, useEffect } from 'react';

function TechnicalSkills({ skill, percentage }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < percentage) {
        setProgress(progress + 1); // Increment progress
      }
    }, 20); // Adjust speed of animation (lower is faster)
    return () => clearTimeout(timer);
  }, [progress, percentage]);

  return (
    <div className="pb-2">
      <h2 className="text-lg font-medium text-white ">{skill}</h2>
      <div className="relative w-11/12 h-5 bg-gray-700 rounded-md overflow-hidden">
        <div
          className="bg-purple-400 h-full"
          style={{
            width: `${progress}%`,
            transition: 'width 0.5s ease-out',
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">{progress}%</span>
      </div>
    </div>
  );
};

export default TechnicalSkills;