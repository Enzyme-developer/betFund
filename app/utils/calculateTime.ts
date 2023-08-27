export default function CountdownTimer() {
  const stopTime = new Date();
  stopTime.setHours(22, 0, 0);

  const startTime = new Date();
  startTime.setHours(8, 0, 0);

  const currentTime = new Date();

    const remainingTime = 8 + (24 - Number(currentTime));
    console.log(remainingTime)

  if (currentTime >= startTime  && currentTime < stopTime) {
    return;
  } else {
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);
    console.log(hours)
  }
}
