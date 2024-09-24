import { Button } from "../button";
import { ReactNode } from "react";
import SidebarItem from "./item";
import { SidebarItemType } from "./type";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/useToken";

interface SidebarProps {
  header?: ReactNode;
  items: SidebarItemType[];
  backgroundColor?: string;
  textColor?: string;
  activeColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  shadow?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  header,
  items,
  backgroundColor = "bg-white",
  textColor = "text-black",
  activeColor = "bg-gray-100 text-gray-900",
  hoverBgColor = "hover:bg-gray-100",
  hoverTextColor = "hover:text-gray-900",
  fontSize = "text-base",
  padding = "p-2",
  borderRadius = "rounded-lg",
  shadow = "shadow-sm",
}) => {
  const navigate = useNavigate();
  const { changeToken } = useToken();
  const handleLogout = () => {
    changeToken();
    toast.success("Logout successfully");
    navigate("/login");
  };
  return (
    <div
      className={`${backgroundColor} flex flex-col gap-2 p-5 w-1/5  ${shadow}`}
    >
      {header}
      <ul className={`space-y-2 font-medium ${textColor}`}>
        {items.map((item: SidebarItemType, index: number) => (
          <SidebarItem
            key={index}
            item={item}
            textColor={textColor}
            activeColor={activeColor}
            hoverBgColor={hoverBgColor}
            hoverTextColor={hoverTextColor}
            fontSize={fontSize}
            padding={padding}
            borderRadius={borderRadius}
          />
        ))}

        <Button variant="outline" className="w-full" onClick={handleLogout}>
          Logout
        </Button>
      </ul>
    </div>
  );
};

export default Sidebar;
