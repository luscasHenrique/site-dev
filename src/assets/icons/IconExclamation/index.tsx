interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconExclamation = (props: IconProps) => (
  <svg
    viewBox="0 0 89 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.2982 0C68.8637 0 89 19.7326 89 44.2982C89 68.8637 68.8637 89 44.2982 89C19.7326 89 0 68.8637 0 44.2982C0 19.7326 19.7326 0 44.2982 0ZM48.3254 23.3577V51.9506C48.3254 57.1858 40.6738 57.1858 40.6738 51.9506V23.3577C40.6738 18.1225 48.3254 18.1225 48.3254 23.3577ZM48.3254 64.0323V65.6434C48.3254 70.8786 40.6738 70.8786 40.6738 65.6434V64.0323C40.6738 59.1999 48.3254 59.1999 48.3254 64.0323Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
