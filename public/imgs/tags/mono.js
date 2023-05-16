import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-2,.cls-3{fill:none;stroke:#000;stroke-linecap:round;stroke-width:8px}.cls-2{stroke-miterlimit:10}.cls-3{stroke-linejoin:round}"
        }
      </style>
    </defs>
    <path
      d="M0 0h192v192H0z"
      style={{
        fill: "none",
      }}
    />
    <path d="M20 110.3V81.7" className="cls-2" />
    <path
      d="M20 87.41s10.78-7.26 16.24-3.27c1.52 1.11 2.31 2.98 2.31 4.86v21.3"
      className="cls-3"
    />
    <path d="m111.02 110.3-.12-28.6" className="cls-2" />
    <path
      d="M111.02 87.41s10.78-7.26 16.24-3.27c1.52 1.11 2.31 2.98 2.31 4.86v21.3M38.8 87.41s10.78-7.26 16.24-3.27c1.52 1.11 2.31 2.98 2.31 4.86v21.3"
      className="cls-3"
    />
    <circle cx={84.18} cy={96} r={14.3} className="cls-3" />
    <circle cx={157.7} cy={96} r={14.3} className="cls-3" />
  </svg>
);
export default SVGComponent;
