import "./App.css";
import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [time, isRunning]);
  const hours = Math.round(time / 3600000);
  const minutes = Math.round((time % 3600000) / 6000);
  const seconds = Math.round((time % 6000) / 100);
  const milisecond = Math.round(time % 100);
  const startStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <>
      {hours.toString().padStart(2, "0")} :{" "}
      {minutes.toString().padStart(2, "0")} :{" "}
      {seconds.toString().padStart(2, "0")} :{" "}
      {milisecond.toString().padStart(2, "0")} <br />
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <h2>Stopwatch</h2>
      <StopWatch />
    </div>
  );
}

export default App;
