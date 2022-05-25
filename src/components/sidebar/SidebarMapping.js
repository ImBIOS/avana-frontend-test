import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SidebarMapping({ data }) {
  const [isOpen, setIsOpen] = React.useState({});

  const pathname = window.location.pathname || "/";

  const handleMenuClick = (id) => setIsOpen({ [id]: !isOpen[id] });

  return (
    <nav>
      {data.map((item) => {
        if (item.isShowed)
          return (
            <div key={item.id}>
              <Link to={!item.childs ? item.id : "#"}>
                <div
                  onClick={item.childs && (() => handleMenuClick(item.id))}
                  key={item.id}
                  className={`flex justify-between items-center my-4 py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white ${
                    pathname.startsWith(item.id) && "bg-blue-500"
                  } ${item.childs && "bg-lightbg-secondary my-0 font-bold"}`}
                >
                  <span className="align-middle ml-2">{item.title}</span>
                  {item.childs && <FaChevronDown />}
                </div>
              </Link>

              {item.childs && (
                <div
                  className="rounded p-2 max-h-[50vh] overflow-y-auto"
                  hidden={!isOpen[item.id]}
                >
                  {item.childs.map((child) => (
                    <a
                      key={child.id}
                      href={child.id}
                      className={`flex justify-between items-center py-2.5 my-4 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white ${
                        pathname.startsWith(child.id) &&
                        "bg-blue-500 text-white font-bold"
                      }`}
                    >
                      <span className="align-middle ml-2">{child.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );

        // return null if item is not showed
        return null;
      })}
    </nav>
  );
}
