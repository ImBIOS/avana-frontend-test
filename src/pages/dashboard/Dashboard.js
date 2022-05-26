import React from "react";
import { useSelector } from "react-redux";
import { selectToggle } from "../../components/toggle/toggleSlice";
import ListRenderer from "./ListRenderer";
import MainViewLayout from "../../layout/MainViewLayout";

export default function Dashboard() {
  const sidebar = useSelector(selectToggle);

  return (
    <MainViewLayout>
      <ListRenderer list={sidebar} />
    </MainViewLayout>
  );
}
