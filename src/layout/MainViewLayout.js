import React from "react";
import Clock from "../components/clock/Clock";
import { username } from "../data/constant";

export default function MainViewLayout({ children }) {
  return (
    <main className="overflow-y-auto h-screen xl:h-[92vh]">
      <section className="flex justify-between items-center pt-4 px-8 text-left font-bold text-3xl">
        <h1>
          Hi,
          <div className="font-light">{username}</div>
        </h1>
        <h1 className="text-5xl">
          <Clock />
        </h1>
      </section>
      <section className="py-4 pt-10 text-left flex flex-wrap justify-center">
        {children}
      </section>
    </main>
  );
}
