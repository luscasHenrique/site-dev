interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconArrow = (props: IconProps) => (
  <svg
    viewBox="0 0 17 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M2.38 0L8.5 6.18084L14.62 0L16.5 1.90283L8.5 10L0.5 1.90283L2.38 0Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
