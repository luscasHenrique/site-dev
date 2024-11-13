interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconTicketPayment = (props: IconProps) => (
  <svg
    viewBox="0 0 15 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <rect
      x="0.75"
      y="0.75"
      width="13.5"
      height="20.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line x1="3" y1="5.5" x2="10" y2="5.5" stroke="currentColor" />
    <line x1="3" y1="7.5" x2="7" y2="7.5" stroke="currentColor" />
    <line x1="3" y1="9.5" x2="9" y2="9.5" stroke="currentColor" />
    {props.children}
  </svg>
);
