import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-darkgrey text-brightfont w-full h-screen">
      <main className="flex flex-row mx-auto max-w-7xl">{children}</main>
    </div>
  );
}
