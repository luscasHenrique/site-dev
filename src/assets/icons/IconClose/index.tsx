interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconClose = (props: IconProps) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
