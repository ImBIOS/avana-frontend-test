import React from "react";
import { useSelector } from "react-redux";
import { profileImage, username } from "../../data/constant";
import { selectToggle } from "../toggle/toggleSlice";
import SidebarMapping from "./SidebarMapping";

export default function Sidebar() {
  const sidebar = useSelector(selectToggle);

  return (
    <div className="w-80 h-full xl:h-[92vh] bg-transparent text-mediumfont space-y-6 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex justify-center my-8">
        <img src="/logo.webp" alt="logo" className="h-8 " />
      </div>
      <div className="flex flex-col justify-center text-center my-8">
        <img
          src={profileImage}
          alt="logo"
          className="h-16 mx-auto rounded-full"
        />
        <h1 className="pt-4 font-bold text-brightfont">{username}</h1>
      </div>
      <SidebarMapping data={sidebar} />
    </div>
  );
}
