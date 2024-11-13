interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconFilter = (props: IconProps) => (
  <svg
    viewBox="0 0 26 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M10.2222 16.6667H15.7778V13.8889H10.2222V16.6667ZM0.5 0V2.77778H25.5V0H0.5ZM4.66667 9.72222H21.3333V6.94444H4.66667V9.72222Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
