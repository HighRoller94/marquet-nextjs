import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = time => (time < 10 ? `0${time}` : time);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const second = timeLeft % 60;

  return (
    <span className="ml-1">
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(second)}
    </span>
  );
};

export default CountdownTimer;