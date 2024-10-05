import { useContext } from "react";
import { stopwatchContext } from "../../context/stopwatch";

const StopwatchHomepage = () => {
  const { timeFormat,stopwatch, onstartwatch, onStopwatch, onResetwatch } =
    useContext(stopwatchContext);
  return (
    <>
      <h1 className="stopwatchContainer">Stopwatch: {timeFormat(stopwatch)}</h1>
      <button onClick={onstartwatch}>Start</button>
      <hr />
      <button onClick={onStopwatch}>Stop</button>
      <hr />
      <button onClick={onResetwatch}>reset</button>
    </>
  );
};

export default StopwatchHomepage;
