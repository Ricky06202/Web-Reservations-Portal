import type { SVGProps } from "react";

export function Profile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 50 50"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          stroke="#344054"
          d="M25 31.25a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"
        ></path>
        <path
          stroke="#344054"
          d="M29.52 29.896a8.23 8.23 0 0 1-9.04 0a14.58 14.58 0 0 0-8.917 8.166a18.75 18.75 0 0 0 26.687.188l.188-.188a14.6 14.6 0 0 0-8.917-8.166"
        ></path>
        <path
          stroke="#306cfe"
          d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"
        ></path>
      </g>
    </svg>
  );
}
