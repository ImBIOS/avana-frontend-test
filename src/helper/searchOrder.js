const searchOrder = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id === key) {
      return i;
    }
  }
};

export default searchOrder;
