const add = (str) => {
  let numbers = new Array();

  if (str && str.length > 0) {
    str = str.replace("\n", ",");
    numbers = str.split(",").map((str) => parseInt(str));
    return numbers.reduce((sum, num) => sum + num, 0);
  } else {
    return 0;
  }
};

module.exports = {
  add,
};
