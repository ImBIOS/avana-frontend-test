import React from "react";

export default function Restricted({ children }) {
  const prompt = () => alert("Not allowed!");
  return (
    <div onClick={prompt}>
      <div className="pointer-events-none opacity-25">{children}</div>
    </div>
  );
}
