interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconSearch = (props: IconProps) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M15.6947 13.8113H14.7028L14.3512 13.4723C15.5817 12.041 16.3225 10.1827 16.3225 8.16123C16.3225 3.65372 12.6687 0 8.16123 0C3.65372 0 0 3.65372 0 8.16123C0 12.6687 3.65372 16.3225 8.16123 16.3225C10.1827 16.3225 12.041 15.5817 13.4723 14.3512L13.8113 14.7028V15.6947L20.0892 21.96L21.96 20.0892L15.6947 13.8113ZM8.16123 13.8113C5.03485 13.8113 2.51115 11.2876 2.51115 8.16123C2.51115 5.03485 5.03485 2.51115 8.16123 2.51115C11.2876 2.51115 13.8113 5.03485 13.8113 8.16123C13.8113 11.2876 11.2876 13.8113 8.16123 13.8113Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
