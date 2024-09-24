import { ReactNode } from "react";

type SidebarProps = {
  backgroundColor?: string;
  textColor?: string;
};

type SidebarItemProps = {
  item: SidebarItemType;
  textColor: string;
  activeColor: string;
  hoverBgColor: string;
  hoverTextColor: string;
  fontSize: string;
  padding: string;
  borderRadius: string;
};

type SidebarItemType = {
  path?: string;
  label: string;
  items?: SidebarItemType[];
  icon?: ReactNode;
};

export type { SidebarProps, SidebarItemProps, SidebarItemType };
