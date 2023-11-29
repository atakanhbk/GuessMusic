import { useEffect, useState } from "react";

export default function InputPart({ timeValue }) {
  const showValue = (event) => {
    timeValue(event.target.value);
  };

  return (
    <div>
      <form id="input-form">
        <select className="time-value" onChange={showValue}>
          <option value="0.5">0.5</option>
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
        </select>
        <br />
        <br />
      </form>
    </div>
  );
}
