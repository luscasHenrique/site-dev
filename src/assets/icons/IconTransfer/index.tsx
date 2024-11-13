interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconTransfer = (props: IconProps) => (
  <svg
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M4.80313 11.4484V3.05469L1.61563 6.24219L0.5 5.12656L5.62656 0L10.7531 5.12656L9.6375 6.24219L6.39688 3.02812V11.4484H4.80313ZM12.3734 21.25L7.24688 16.0969L8.3625 15.0078L11.55 18.1953V9.80156H13.1437V18.2219L16.3844 15.0078L17.5 16.1234L12.3734 21.25Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
