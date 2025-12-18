
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 59, seconds: 59 }; // Reset after 5 hours for demo
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex gap-2 items-center justify-center font-bold text-lg md:text-xl">
      <div className="bg-red-600 text-white px-3 py-1 rounded shadow-lg">{format(timeLeft.seconds)}</div>
      <span className="text-red-600">:</span>
      <div className="bg-red-600 text-white px-3 py-1 rounded shadow-lg">{format(timeLeft.minutes)}</div>
      <span className="text-red-600">:</span>
      <div className="bg-red-600 text-white px-3 py-1 rounded shadow-lg">{format(timeLeft.hours)}</div>
    </div>
  );
};

export default CountdownTimer;
