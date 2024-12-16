import React, { useEffect, useState, useRef } from "react";

function SoftSkills({ skill, percentage, color }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circle circumference
    const offset = circumference - (progress / 100) * circumference; // Calculate offset

    useEffect(() => {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger animation when 50% visible
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
        // Start the animation when visible
        if (isVisible && progress < percentage) {
            const timer = setTimeout(() => {
                setProgress((prev) => Math.min(prev + 1, percentage)); // Increment progress
            }, 20); // Adjust speed of animation
            return () => clearTimeout(timer);
        }
    }, [isVisible, progress, percentage]);

    return (
        <div className="flex flex-col items-center px-4 mt-8" ref={ref}>
            <svg
                width="120"
                height="120"
                className="rotate-[-90deg] overflow-visible"
            >
                {/* Background Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="15"
                />
                {/* Foreground Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth="15"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
                />
            </svg>
            <span className="text-lg font-bold text-white mt-2 text-center">{skill}</span>
            <span className="text-sm text-gray-300">{progress}%</span>
        </div>
    );
}

export default SoftSkills;