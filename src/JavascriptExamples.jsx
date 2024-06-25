import { useState, useEffect } from 'react';

const timeFormatter = new Intl.DateTimeFormat("en-US", {"timeStyle": "short"});

function DigitalClock() {
  const [time, setTime] = useState(timeFormatter.format(new Date()));

  useEffect(
    () => {
      let interval = setInterval(() => setTime(timeFormatter.format(new Date())), 60000);
      return () => clearInterval(interval);
    },
    []
  );

  return <div id="digital-clock" style={{"font-family": "monospaced", "color": "green"}}>{time}</div>
}

export default function JavascriptExamples() {
  return (
    <>
      <div id="clocks">
        <canvas id="analog-clock" width="150" height="150" style={{"background-color": "#999"}}></canvas>
        <DigitalClock/> 
      </div>
      <div id="joke-container"></div>
    </>
  )
}
