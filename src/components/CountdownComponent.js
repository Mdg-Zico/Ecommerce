import React from "react";
import ReactCountdown from "react-countdown";  // Use a different name for the imported Countdown component

export default function CountdownComponent() {
  // Calculate the timestamp for 3 days from now
  const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;

  return (
    <div>
      <ReactCountdown date={threeDaysFromNow} className="countdown" />
    </div>
  );
}














/*

import React, { useEffect, useState } from "react";
import ReactCountdown from "react-countdown";

export default function CountdownComponent() {
  const storedTimestamp = localStorage.getItem("countdownTargetTimestamp");
  const initialTimestamp = storedTimestamp ? parseInt(storedTimestamp, 10) : null;

  const [targetTimestamp, setTargetTimestamp] = useState(initialTimestamp);

  useEffect(() => {
    if (!targetTimestamp) {
      // Calculate the timestamp for 3 days from now
      const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;
      setTargetTimestamp(threeDaysFromNow);
      localStorage.setItem("countdownTargetTimestamp", threeDaysFromNow.toString());
    }
  }, [targetTimestamp]);

  return (
    <div>
      {targetTimestamp && <ReactCountdown date={targetTimestamp} className="countdown" />}
    </div>
  );
}

*/