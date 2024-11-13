interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconMenu = (props: IconProps) => (
  <svg
    viewBox="0 0 7 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M3.5 6C5.15 6 6.5 4.65 6.5 3C6.5 1.35 5.15 0 3.5 0C1.85 0 0.5 1.35 0.5 3C0.5 4.65 1.85 6 3.5 6ZM3.5 9C1.85 9 0.5 10.35 0.5 12C0.5 13.65 1.85 15 3.5 15C5.15 15 6.5 13.65 6.5 12C6.5 10.35 5.15 9 3.5 9ZM3.5 18C1.85 18 0.5 19.35 0.5 21C0.5 22.65 1.85 24 3.5 24C5.15 24 6.5 22.65 6.5 21C6.5 19.35 5.15 18 3.5 18Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
