import type { SVGProps } from "react";

export function User(props: SVGProps<SVGSVGElement>) {
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
          d="m43.146 33.52l-10.23 10.23h-5.833v-5.833l10.23-10.23a2.084 2.084 0 0 1 2.916 0l2.917 2.917a2.084 2.084 0 0 1 0 2.917"
        ></path>
        <path
          stroke="#306cfe"
          d="M35.417 19.313q.015-.282 0-.563A12.5 12.5 0 1 0 22 31.25"
        ></path>
        <path
          stroke="#306cfe"
          d="M18.75 43.75c-9.27-.77-12.5-4.167-12.5-4.167V37.5a10.42 10.42 0 0 1 7.27-9.896"
        ></path>
      </g>
    </svg>
  );
}
