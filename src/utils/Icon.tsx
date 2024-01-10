const check = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M9 12l2 2l4 -4"></path>
  </svg>
);

const arrRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const iconList = new Map<string, React.JSX.Element>();

iconList.set("check", check);
iconList.set("arrRight", arrRight);

type IconProps = {
  type: string;
};

const Icon = ({ type }: IconProps) => {
  return iconList.get(type);
};

export default Icon;
