import Restricted from "../restricted/Restricted";

export default function Toggle({ children, toggle }) {
  const isShowed = toggle.isShowed;
  const isAllowed = toggle.isAllowed;

  if (isShowed && isAllowed) {
    return children;
  } else if (isShowed && !isAllowed) {
    return <Restricted>{children}</Restricted>;
  } else return null;
}
