const searchOrderRecursively = (key, inputArray) => {
  let orderArray = [];
  let isFound = false;

  const recurse = (key2, inputArray2) => {
    for (let i = 0; i < inputArray2.length; i++) {
      const childs = inputArray2[i].childs;

      orderArray.push(i);

      if (inputArray2[i].id === key2) {
        isFound = true;
        return orderArray;
      } else if (childs) {
        recurse(key2, childs);
        if (isFound) return orderArray;
      }

      orderArray.pop();
    }
  };

  recurse(key, inputArray);

  return orderArray;
};

export default searchOrderRecursively;
