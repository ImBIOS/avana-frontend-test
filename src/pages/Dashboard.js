import React from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaEye,
  FaEyeSlash,
  FaWindowClose,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  activate,
  deactivate,
  hideToggle,
  selectToggle,
  showToggle,
} from "../components/toggle/toggleSlice";

export default function Dashboard() {
  const [isOpen, setIsOpen] = React.useState({});
  const sidebar = useSelector(selectToggle);
  const dispatch = useDispatch();

  const handleDropdownClick = (id) =>
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });

  const listRenderer = (list) =>
    list.map((item) => (
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
        {item.childs && childRenderer(item.childs)}
      </div>
    ));

  const childRenderer = (childs) =>
    childs.map((child) => {
      const nested = child.childs;

      return (
        <h2 key={child.id}>
          <div className="flex items-center bg-primary text-black opacity-50 justify-between rounded p-2 my-2">
            <span>{child.title}</span>
            <span className="hover:cursor-pointer flex gap-8">
              {nested && !isOpen[child.id] && (
                <FaChevronDown onClick={() => handleDropdownClick(child.id)} />
              )}
              {nested && isOpen[child.id] && (
                <FaChevronUp onClick={() => handleDropdownClick(child.id)} />
              )}

              {child.isShowed ? (
                <FaEye onClick={() => dispatch(hideToggle(child.id))} />
              ) : (
                <FaEyeSlash onClick={() => dispatch(showToggle(child.id))} />
              )}

              {child.isAllowed ? (
                <FaCheck onClick={() => dispatch(deactivate(child.id))} />
              ) : (
                <FaWindowClose onClick={() => dispatch(activate(child.id))} />
              )}
            </span>
          </div>
          <div hidden={!isOpen[child.id]} className="m-2">
            {nested && childRenderer(nested)}
          </div>
        </h2>
      );
    });

  return (
    <main className="py-4 pt-10 text-left flex flex-wrap justify-center overflow-y-auto h-screen xl:h-[92vh]">
      {listRenderer(sidebar)}
    </main>
  );
}
