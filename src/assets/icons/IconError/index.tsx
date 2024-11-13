interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const IconError = (props: IconProps) => (
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
      d="M44.5 0C19.8919 0 0 19.9098 0 44.5C0 69.1101 19.8899 89 44.5 89C69.0902 89 89 69.1081 89 44.5C89 19.9118 69.0882 0 44.5 0ZM25.6227 23.6406C25.6917 23.6375 25.7616 23.6375 25.8306 23.6406C26.4313 23.636 27.0079 23.8742 27.43 24.3018L44.5001 41.3711L61.5703 24.301C61.9823 23.8711 62.5504 23.6243 63.1464 23.6165C63.7423 23.608 64.3166 23.84 64.7411 24.2591C65.1648 24.6782 65.4022 25.2501 65.4015 25.8461C65.3999 26.442 65.1593 27.0132 64.7333 27.4299L47.6632 44.5L64.7333 61.5702C65.1593 61.9869 65.3999 62.558 65.4015 63.154C65.4022 63.75 65.1648 64.3219 64.7411 64.741C64.3166 65.16 63.7423 65.3921 63.1464 65.3835C62.5504 65.3758 61.9823 65.129 61.5703 64.6991L44.5001 47.6639L27.43 64.6991C27.0335 65.1903 26.4476 65.4899 25.8167 65.5232C25.1865 65.5566 24.5719 65.3207 24.1257 64.8745C23.6795 64.4283 23.4436 63.8137 23.477 63.1827C23.5104 62.5526 23.8099 61.9667 24.3011 61.5702L41.3712 44.5001L24.3011 27.4299C23.6935 26.8262 23.4871 25.9276 23.7688 25.1197C24.0505 24.3111 24.7714 23.7361 25.6227 23.6406V23.6406Z"
      fill="currentColor"
    />
    {props.children}
  </svg>
);
