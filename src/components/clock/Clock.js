import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClock, tick } from "./clockSlice";

export default function Clock() {
  const time = useSelector(selectClock);
  const dispatch = useDispatch();

  const intervalID = setInterval(() => dispatch(tick()), 1000);

  useEffect(() => {
    // clearInterval on unmount component
    return () => {
      clearInterval(intervalID);
    };
  }, [intervalID]);

  return time;
}
