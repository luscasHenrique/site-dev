interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconPin = (props: IconProps) => (
  <svg
    viewBox="0 0 15 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM2.5 7C2.5 4.24 4.74 2 7.5 2C10.26 2 12.5 4.24 12.5 7C12.5 9.88 9.62 14.19 7.5 16.88C5.42 14.21 2.5 9.85 2.5 7Z"
      fill="currentColor"
    />
    <path
      d="M7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
