import React from "react";
import { useSelector } from "react-redux";
import { selectToggle } from "../../components/toggle/toggleSlice";
import ListRenderer from "./ListRenderer";

export default function Dashboard() {
  const sidebar = useSelector(selectToggle);

  return (
    <main className="py-4 pt-10 text-left flex flex-wrap justify-center overflow-y-auto h-screen xl:h-[92vh]">
      <ListRenderer list={sidebar} />
    </main>
  );
}
