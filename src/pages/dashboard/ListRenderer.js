import React from "react";
import { FaCheck, FaEye, FaEyeSlash, FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  activate,
  deactivate,
  hideToggle,
  showToggle,
} from "../../components/toggle/toggleSlice";
import ChildRenderer from "./ChildRenderer";

export default function ListRenderer({ list }) {
  const dispatch = useDispatch();

  return list.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-4 w-[40%] m-4 p-2 bg-gray-700 rounded-md"
    >
      <h1 className="flex justify-between items-center mx-2">
        <span className="font-semibold p-2">{item.title}</span>
        <span className="hover:cursor-pointer flex gap-8">
          {item.isShowed ? (
            <FaEye onClick={() => dispatch(hideToggle(item.id))} />
          ) : (
            <FaEyeSlash onClick={() => dispatch(showToggle(item.id))} />
          )}

          {item.isAllowed ? (
            <FaCheck onClick={() => dispatch(deactivate(item.id))} />
          ) : (
            <FaWindowClose onClick={() => dispatch(activate(item.id))} />
          )}
        </span>
      </h1>
      {item.childs && <ChildRenderer data={item.childs} />}
    </div>
  ));
}
