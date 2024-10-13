import type { SVGProps } from "react";

export function History(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorHistory480)"
          d="M23.5 13a1.5 1.5 0 0 1 1.5 1.5V23h5.5a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5v-10a1.5 1.5 0 0 1 1.5-1.5"
        ></path>
        <path
          fill="url(#fluentColorHistory481)"
          d="M24 9c8.284 0 15 6.716 15 15s-6.716 15-15 15S9 32.284 9 24q.002-1.162.171-2.275a1.5 1.5 0 0 0-2.966-.45Q6.001 22.61 6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6c-4.61 0-8.816 1.734-12 4.584V7.5a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-3.698A14.94 14.94 0 0 1 24 9"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorHistory480"
            x1={20.313}
            x2={44.734}
            y1={37.809}
            y2={28.299}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d373fc"></stop>
            <stop offset={1} stopColor="#6d37cd"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorHistory481"
            x1={6}
            x2={15.663}
            y1={8.118}
            y2={48.577}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0fafff"></stop>
            <stop offset={1} stopColor="#0067bf"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
