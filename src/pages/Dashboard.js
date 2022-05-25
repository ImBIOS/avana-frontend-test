import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  hideToggle,
  selectToggle,
  showToggle,
} from "../components/toggle/toggleSlice";

export default function Dashboard() {
  const sidebar = useSelector(selectToggle);
  const dispatch = useDispatch();

  let indent = 0;
  const increaseIndent = () => {
    indent += 2;
  };
  const resetIndent = () => {
    indent = 0;
  };

  const listRenderer = (list) => {
    return list.map((item) => {
      return (
        <div key={item.id} className="w-[40%] m-4 p-2 bg-gray-700 rounded-md">
          <h1 className={`flex justify-between ml-${indent}`}>
            <span className="font-semibold">{item.title}</span>
            {item.isShowed ? (
              <FaEye
                className="inline-block"
                onClick={() => dispatch(hideToggle(item.id))}
              />
            ) : (
              <FaEyeSlash
                className="inline-block"
                onClick={() => dispatch(showToggle(item.id))}
              />
            )}
          </h1>
          <h2>
            {item.childs
              ? item.childs.map((child) => {
                  const nested = child.childs;
                  increaseIndent();

                  return (
                    <>
                      <div className={`ml-${indent}`}>
                        {child.title}
                        {child.isShowed ? (
                          <FaEye
                            className="inline-block"
                            onClick={() => dispatch(hideToggle(child.id))}
                          />
                        ) : (
                          <FaEyeSlash
                            className="inline-block"
                            onClick={() => dispatch(showToggle(child.id))}
                          />
                        )}
                      </div>
                      {increaseIndent()}
                      {nested && listRenderer(nested)}
                    </>
                  );
                })
              : resetIndent()}
          </h2>
        </div>
      );
    });
  };

  return (
    <main className="py-4 pt-10 text-left flex flex-wrap justify-center overflow-y-auto h-screen xl:h-[92vh]">
      {listRenderer(sidebar)}
    </main>
  );
}
