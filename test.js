const add = (str) => {
  let numbers = new Array();
  let delimiter = ",";

  if (str && str.length > 0) {
    if (str[0] === "/") {
      delimiter = str[2];
      str = str.substring(4);
    }

    str = str.replace("\n", delimiter);
    numbers = str.split(delimiter).map((str) => parseInt(str));

    return numbers.reduce((sum, num) => sum + num, 0);
  } else {
    return 0;
  }
};

module.exports = {
  add,
};
