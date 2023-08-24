import React, { useEffect, useState } from 'react';

export default function CountdownTimer() {
        const closingTime = new Date();
        closingTime.setHours(22, 0, 0);
      const currentTime = new Date();
      const timeDiff = Number(closingTime) - Number(currentTime);

      if (timeDiff <= 0) {
        return
      } else {
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
      }
    };

