import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "../../pages/About";
import Dashboard from "../../pages/Dashboard";
import NotFound from "../../pages/NotFound";

export default function MainView() {
  let navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/")
      navigate("/dashboard", { replace: true });
  }, [navigate]);

  return (
    <div className="grow text-center border border-white bg-lightgrey">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="404" element={<NotFound />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
