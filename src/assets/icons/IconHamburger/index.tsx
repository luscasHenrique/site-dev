interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconHamburger = (props: IconProps) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M2.75 16.5V15.125H19.25V16.5H2.75ZM2.75 11.6875V10.3125H19.25V11.6875H2.75ZM2.75 6.875V5.5H19.25V6.875H2.75Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
