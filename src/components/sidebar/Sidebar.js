import React from "react";
import sidebar from "../../data/sidebar";
import SidebarMapping from "./SidebarMapping";

export default function Sidebar() {
  return (
    <div className="grow max-w-xs border border-primary">
      <div className="h-full xl:h-[92vh] flex">
        <div className="sidebar mx-4 bg-transparent text-mediumfont w-64 space-y-6 py-2 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <SidebarMapping data={sidebar} />
        </div>
      </div>
    </div>
  );
}
