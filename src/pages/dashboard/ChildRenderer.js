import React from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaEye,
  FaEyeSlash,
  FaWindowClose,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  activate,
  deactivate,
  hideToggle,
  showToggle,
} from "../../components/toggle/toggleSlice";

export default function ChildRenderer({ data }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState({});
  const handleDropdownClick = (id) =>
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });

  return data.map((child) => {
    const nested = child.childs;

    return (
      <h2 key={child.id}>
        <div className="flex items-center bg-lightgrey opacity-80 justify-between rounded p-2 my-2">
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
          {nested && <ChildRenderer data={nested} />}
        </div>
      </h2>
    );
  });
}
