import { SVGProps } from "react";

interface IProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
}

const SidebarRow = ({ Icon, title, onClick }: IProps) => {
  return (
    <div
      className="flex max-w-fit items-center cursor-pointer transition-all duration-200 space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 group"
      onClick={() => onClick?.()}
    >
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter hidden md:inline-flex font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
