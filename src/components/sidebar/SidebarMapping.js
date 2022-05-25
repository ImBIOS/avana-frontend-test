import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Toggle from "../toggle/Toggle";

export default function SidebarMapping({ data }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState({});

  const pathname = location.pathname;

  const handleMenuClick = (id) => setIsOpen({ [id]: !isOpen[id] });

  return (
    <nav>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Toggle id={item.id} toggle={item}>
              <Link to={!item.childs ? item.id : "#"}>
                <div
                  onClick={item.childs && (() => handleMenuClick(item.id))}
                  key={item.id}
                  className={`flex justify-between items-center my-4 p-4 transition duration-200 hover:bg-lightgrey hover:text-white ${
                    pathname.startsWith(`/${item.id}`) &&
                    "bg-lightgrey border-r-2 border-primary"
                  } ${item.childs && "bg-lightbg-secondary my-0"}`}
                >
                  <span className="align-middle ml-2">{item.title}</span>
                  {item.childs && !isOpen[item.id] && <FaChevronDown />}
                  {item.childs && isOpen[item.id] && <FaChevronUp />}
                </div>
              </Link>
            </Toggle>

            {item.childs && (
              <div
                className="p-2 max-h-[30vh] overflow-y-auto"
                hidden={!isOpen[item.id]}
              >
                {item.childs.map((child) => (
                  <Toggle id={child.id} toggle={child}>
                    <a
                      key={child.id}
                      href={child.id}
                      className={`flex justify-between items-center py-2.5 my-4 px-4 border-b opacity-50 transition duration-200 hover:bg-lightgrey hover:text-white ${
                        pathname.startsWith(`/${child.id}`) &&
                        "bg-lightgrey text-white font-bold"
                      }`}
                    >
                      <span className="align-middle ml-2 text-mediumfont">
                        {child.title}
                      </span>
                    </a>
                  </Toggle>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
