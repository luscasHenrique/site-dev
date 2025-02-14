interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconCheckSuccess = (props: IconProps) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M40 0C17.8802 0 0 17.8802 0 40C0 62.1198 17.8802 80 40 80C62.1198 80 80 62.1198 80 40C80 17.8802 62.1198 0 40 0ZM59.3548 31.7051L35.6682 55.2995C34.9308 56.037 34.0095 56.4053 33.0876 56.4053C32.1656 56.4053 31.1517 56.037 30.5069 55.2995L18.8017 43.6863C17.3269 42.2115 17.3269 39.9073 18.8017 38.4325C20.2765 36.9577 22.5806 36.9577 24.0555 38.4325L33.0876 47.4646L54.1014 26.4508C55.5762 24.976 57.8804 24.976 59.3552 26.4508C60.7374 27.9262 60.7374 30.3223 59.3552 31.7052L59.3548 31.7051Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
    {props.children}
  </svg>
);
