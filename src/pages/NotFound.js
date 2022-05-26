import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { homePathname } from "../data/constant";
import MainViewLayout from "../layout/MainViewLayout";

export default function NotFound() {
  const [second, setSecond] = React.useState(3);
  let navigate = useNavigate();

  const redirectTime = setInterval(() => {
    setSecond(second - 1);
  }, 1000);

  useEffect(() => {
    if (second <= 0) {
      navigate(homePathname, { replace: true });
    }

    return () => {
      clearInterval(redirectTime);
    };
  }, [navigate, redirectTime, second]);
  return (
    <MainViewLayout>
      <h2>Not Found</h2>
      <p>
        Redirect to <code>/dashboard</code> in {second} second(s).
      </p>
    </MainViewLayout>
  );
}
