interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconFacebook2 = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10 10H8V12H10V18H13V12H14.82L15 10H13V9.167C13 8.689 13.096 8.5 13.558 8.5H15V6H12.596C10.798 6 10 6.792 10 8.308V10Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
