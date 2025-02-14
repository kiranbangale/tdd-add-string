const add = (str) => {
  if (str && str.length > 0) {
    return parseInt(str);
  } else {
    return 0;
  }
};

module.exports = {
  add,
};
