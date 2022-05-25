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
  const toggle = useSelector((state) => search(id, state.toggles)) ?? false;
  const isShowed = toggle?.isShowed;
  const isAllowed = toggle?.isAllowed;

  if (isShowed && isAllowed) {
    return children;
  } else if (isShowed && !isAllowed) {
    return <Restricted>{children}</Restricted>;
  } else return null;
}
