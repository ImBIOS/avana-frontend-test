const accessNestedChild = (nestedArray, orderArray, key) => {
  let isFound = false;
  let result = {};

  const recurse = (nestedArray2, orderArray2, key2) => {
    for (let i = 0; i < orderArray2.length; i++) {
      const order = orderArray2[i];
      const childs = nestedArray2[order]?.childs;

      if (nestedArray2[order]?.id === key2) {
        isFound = true;
        result = nestedArray2[order];
        break;
      } else if (childs) {
        recurse(childs, orderArray2.slice(1), key2);
        if (isFound) break;
      }
    }
  };

  recurse(nestedArray, orderArray, key);

  return result;
};

export default accessNestedChild;
