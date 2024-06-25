import * as React from "react";
import { SVGProps } from "react";
const Shape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 366 36"
    {...props}
  >
    <g clipPath="url(#shape-a)">
      <mask id="shape-c" fill="#fff">
        <path
          fillRule="evenodd"
          d="m267.496 0 12.252 9 10.891 8H366a1 1 0 0 1 0 2h-75.361l-10.891 8-12.252 9H98.504l-12.252-9-10.89-8H0a1 1 0 1 1 0-2h75.361l10.89-8 12.253-9h168.992Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#0F172A"
        fillRule="evenodd"
        d="m267.496 0 12.252 9 10.891 8H366a1 1 0 0 1 0 2h-75.361l-10.891 8-12.252 9H98.504l-12.252-9-10.89-8H0a1 1 0 1 1 0-2h75.361l10.89-8 12.253-9h168.992Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#shape-b)"
        d="m279.748 9 1.184-1.612L279.748 9Zm-12.252-9 1.184-1.612-.528-.388h-.656v2Zm23.143 17-1.184 1.612.528.388h.656v-2Zm0 2v-2h-.656l-.528.388L290.639 19Zm-10.891 8 1.184 1.612L279.748 27Zm-12.252 9v2h.656l.528-.388L267.496 36ZM98.504 36l-1.184 1.612.528.388h.656v-2Zm-12.252-9-1.184 1.612L86.252 27Zm-10.89-8 1.183-1.612-.528-.388h-.656v2Zm0-2v2h.655l.528-.388L75.361 17Zm10.89-8-1.184-1.612L86.252 9Zm12.252-9v-2h-.656l-.528.388L98.504 0Zm182.428 7.388-12.252-9-2.368 3.224 12.252 9 2.368-3.224Zm10.891 8-10.891-8-2.368 3.224 10.891 8 2.368-3.224ZM290.639 19H366v-4h-75.361v4ZM366 19a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-1-1a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm1-1h-75.361v4H366v-4Zm-85.068 11.612 10.891-8-2.368-3.224-10.891 8 2.368 3.224Zm-12.252 9 12.252-9-2.368-3.224-12.252 9 2.368 3.224ZM98.504 38h168.992v-4H98.504v4Zm-13.436-9.388 12.252 9 2.368-3.224-12.252-9-2.368 3.224Zm-10.89-8 10.89 8 2.368-3.224-10.89-8-2.369 3.224ZM75.36 17H0v4h75.361v-4ZM0 17a1 1 0 0 1 1 1h-4a3 3 0 0 0 3 3v-4Zm1 1a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4Zm-1 1h75.361v-4H0v4ZM85.068 7.388l-10.89 8 2.367 3.224 10.891-8-2.368-3.224Zm12.252-9-12.252 9 2.368 3.224 12.252-9-2.368-3.224ZM267.496-2H98.504v4h168.992v-4Z"
        mask="url(#shape-c)"
      />
    </g>
    <defs>
      <linearGradient
        id="shape-b"
        x1={-1}
        x2={367}
        y1={18}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4C5292" stopOpacity={0.2} />
        <stop offset={0.495} stopColor="#818CF8" />
        <stop offset={1} stopColor="#4C5292" stopOpacity={0.2} />
      </linearGradient>
      <clipPath id="shape-a">
        <path fill="#fff" d="M0 0h366v36H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Shape;
