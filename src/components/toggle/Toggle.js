import { useSelector } from "react-redux";
import Restricted from "../restricted/Restricted";

const search = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id === key) {
      return inputArray[i];
    }
  }
};

export default function Toggle({ id, children }) {
  const toggle = useSelector((state) => state.toggles) ?? false;
  const isShowed = search(id, toggle)?.isShowed;
  const isAllowed = search(id, toggle)?.isAllowed;

  if (isShowed && isAllowed) {
    return children;
  } else if (isShowed && !isAllowed) {
    return <Restricted>{children}</Restricted>;
  } else return null;
}
