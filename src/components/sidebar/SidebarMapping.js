/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SidebarMapping({ data }) {
  return (
    <nav>
      {data.map((item) => {
        return (
          <>
            <a
              key={item.id}
              href={!item.childs ? item.id : undefined}
              className={`flex justify-between items-center my-4 py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white ${
                window.location.pathname.startsWith(item.id) && "bg-blue-500"
              } ${item.childs && "bg-lightbg-secondary my-0 font-bold"}`}
            >
              <span className="align-middle ml-2">{item.title}</span>
              {item.childs && <FaChevronDown />}
            </a>

            {item.childs && (
              <>
                <div className="rounded p-2">
                  {item.childs.map((child) => (
                    <a
                      key={child.id}
                      href={child.id}
                      className={`flex justify-between items-center py-2.5 my-4 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white ${
                        window.location.pathname.startsWith(child.id) &&
                        "bg-blue-500 text-white font-bold"
                      }`}
                    >
                      <span className="align-middle ml-2">{child.title}</span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </>
        );
      })}
    </nav>
  );
}
