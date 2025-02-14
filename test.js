const add = (str) => {
  let numbers = [];
  let delimiter = ",";
  let arrWithNegativeNumbers = [];

  if (str && str.length > 0) {
    if (str[0] === "/") {
      delimiter = str[2];
      str = str.substring(4);
    }

    str = str.replace("\n", delimiter);
    numbers = str.split(delimiter).map((str) => parseInt(str));

    arrWithNegativeNumbers = numbers.filter((num) => num < 0);
    if (arrWithNegativeNumbers.length) {
      console.error("Negative numbers not allowed" + arrWithNegativeNumbers);
      return `Negative numbers not allowed ${arrWithNegativeNumbers}`;
    } else {
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  } else {
    return 0;
  }
};

module.exports = {
  add,
};
