import { useSelector } from "react-redux";

export default function Toggle({ id, children }) {
  const isShow = useSelector((state) => state.toggle[id]) ?? false;
  return isShow ? children : null;
}
