type TimerState = 'running' | 'stopped';

interface CountdownTimer {
  state: TimerState;
  targetCloseTime: Date;
  targetOpenTime: Date;
  currentTime: Date;
  intervalId:  any;
}

const OPEN_HOUR = 8; // 8 am
const CLOSE_HOUR = 22; // 10 pm

export function initializeCountdownTimer(): CountdownTimer {
  const timer: CountdownTimer = {
    state: 'stopped',
    targetCloseTime: new Date(),
    targetOpenTime: new Date(),
    currentTime: new Date(),
    intervalId: undefined,
  };

  // Set the target close and open times
  timer.targetCloseTime.setHours(CLOSE_HOUR, 0, 0, 0);
  timer.targetOpenTime.setHours(OPEN_HOUR, 0, 0, 0);

  return timer;
}

export function startCountdown(timer: CountdownTimer) {
  if (timer.state !== 'running') {
    timer.intervalId = setInterval(() => {
      timer.currentTime = new Date();
      if (timer.currentTime >= timer.targetOpenTime) {
        // The store has opened
        stopCountdown(timer);
        console.log('The store has opened!');
      }
    }, 1000);
    timer.state = 'running';
  }
}

export function stopCountdown(timer: CountdownTimer) {
  if (timer.state !== 'stopped') {
    clearInterval(timer.intervalId);
    timer.state = 'stopped';
  }
}

// Usage example:

const timer = initializeCountdownTimer();

// Check if it's closing time (10 pm)
if (timer.currentTime >= timer.targetCloseTime) {
  startCountdown(timer);
}
