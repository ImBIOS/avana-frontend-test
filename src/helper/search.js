const search = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id === key) {
      return inputArray[i];
    }
  }
};

export default search;
