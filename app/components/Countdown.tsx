'use client'
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Calculate the target time for the store to open (8 AM next day)
    const targetOpenTime = new Date();
    const targetClosingTime = new Date();
    // targetOpenTime.setDate(targetOpenTime.getDate() + 1);
    targetOpenTime.setHours(8, 0, 0, 0); // Set time to 8:00 AM
    targetClosingTime.setHours(22, 0, 0, 0); 

    const updateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = Number(targetOpenTime.setDate(targetOpenTime.getDate() + 1)) - Number(currentTime);

      if (currentTime > targetClosingTime || currentTime < targetOpenTime) {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ hours, minutes, seconds });
      } else {
        // Store is open, countdown should stop
        clearInterval(interval);
      }
    };

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        Store is closing in {countdown.hours} hours, {countdown.minutes} minutes, and {countdown.seconds} seconds.
      </p>
    </div>
  );
};

export default Countdown;
