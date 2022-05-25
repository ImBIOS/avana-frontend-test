import React from "react";

export default function Restricted({ children }) {
  const prompt = alert("You are not allowed to use this feature.");
  return <div onClick={prompt}>{children}</div>;
}
