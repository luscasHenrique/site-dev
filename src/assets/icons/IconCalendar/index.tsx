interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconCalendar = (props: IconProps) => (
  <svg
    viewBox="0 0 18 19"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax"
    {...props}
  >
    <path
      d="M15.3818 1.70909H14.5273V0H12.8182V1.70909H4.27273V0H2.56364V1.70909H1.70909C0.769091 1.70909 0 2.47818 0 3.41818V17.0909C0 18.0309 0.769091 18.8 1.70909 18.8H15.3818C16.3218 18.8 17.0909 18.0309 17.0909 17.0909V3.41818C17.0909 2.47818 16.3218 1.70909 15.3818 1.70909ZM15.3818 17.0909H1.70909V7.69091H15.3818V17.0909ZM15.3818 5.98182H1.70909V3.41818H15.3818V5.98182Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
