interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconSecurity = (props: IconProps) => (
  <svg
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M6 0L0 2.66667V6.66667C0 10.3667 2.56 13.8267 6 14.6667C9.44 13.8267 12 10.3667 12 6.66667V2.66667L6 0ZM6 7.32667H10.6667C10.3133 10.0733 8.48 12.52 6 13.2867V7.33333H1.33333V3.53333L6 1.46V7.32667Z"
      fill="#828282"
    />
    {props.children}
  </svg>
);
