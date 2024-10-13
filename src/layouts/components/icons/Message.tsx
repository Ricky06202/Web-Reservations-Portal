import type { SVGProps } from "react";

export function Message(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path
          fill="#2f88ff"
          stroke="#000"
          d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"
        ></path>
        <path stroke="#fff" d="M14 18L32 18"></path>
        <path stroke="#fff" d="M14 26H32"></path>
        <path stroke="#fff" d="M14 34H24"></path>
      </g>
    </svg>
  );
}
