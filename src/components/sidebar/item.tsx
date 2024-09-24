import { Link, useLocation } from "react-router-dom";
import { SidebarItemProps, SidebarItemType } from "./type";

import { useState } from "react";

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  textColor,
  activeColor,
  hoverBgColor,
  hoverTextColor,
  fontSize,
  padding,
  borderRadius,
}) => {
  const { path, label, items, icon } = item;

  const location = useLocation();
  const [isNestedListVisible, setNestedListVisibility] =
    useState<boolean>(false);

  const isActiveLink = (path: string) => location.pathname === path;

  const toggleNestedList = () => setNestedListVisibility(!isNestedListVisible);

  const linkClasses = (isActive: boolean) =>
    isActive
      ? `flex items-center w-full ${padding} transition duration-75 ${borderRadius} group ${activeColor}`
      : `flex items-center w-full ${padding} transition duration-75 ${borderRadius} group ${hoverBgColor} ${textColor} ${hoverTextColor}`;

  return (
    <li>
      {items ? (
        <button
          type="button"
          className={`flex items-center w-full ${padding} ${fontSize} transition duration-75 ${borderRadius} group ${hoverBgColor} ${textColor} ${hoverTextColor}`}
          onClick={toggleNestedList}
        >
          {icon && <span className="mr-2">{icon}</span>}
          <span className="flex-1 text-left rtl:text-right whitespace-nowrap">
            {label}
          </span>
          <svg
            className={`w-3 h-3 transform ${
              isNestedListVisible ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      ) : (
        <Link
          to={path as string}
          className={linkClasses(isActiveLink(path as string))}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </Link>
      )}

      {items && (
        <ul
          className={`${
            isNestedListVisible ? "py-2 pl-2" : "hidden"
          } space-y-2`}
        >
          {items.map((nestedItem: SidebarItemType, index: number) => (
            <li key={index}>
              <Link
                to={nestedItem.path as string}
                className={linkClasses(isActiveLink(nestedItem.path as string))}
              >
                {nestedItem.icon && (
                  <span className="mr-2">{nestedItem.icon}</span>
                )}
                {nestedItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
