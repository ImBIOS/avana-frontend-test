import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { homePathname } from "../App";

export default function NotFound() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(homePathname, { replace: true });
  }, [navigate]);
  return <div>NotFound</div>;
}
