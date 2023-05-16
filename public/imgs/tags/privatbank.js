import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#d8dee9",
      }}
      d="M63.4 248.02h146.73v146.73H63.4z"
    />
    <path
      d="M63.54 19.38v182.64h38.86c102.12 0 153.88 51.76 153.88 153.88v38.86h182.64V19.38H63.54zm297.81 77.71v220.09h-29.88c-12.91-108.85-81.36-177.31-190.21-190.21V96.95c49.79.14 170.29.14 220.09.14z"
      style={{
        fill: "#eceff4",
      }}
    />
  </svg>
);
export default SVGComponent;
