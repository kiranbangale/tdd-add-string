const { assert } = require("chai");
const { add } = require("../test");

describe("add", () => {
  it("should return 0 for no input", () => {
    const result = add();
    assert.equal(result, 0);
  });
  it("should return 0 for empty string", () => {
    const result = add("");
    assert.equal(result, 0);
  });
  it("should return number for single number passed in string", () => {
    const result = add("1");
    assert.equal(result, 1);
  });
  it("should return addition of two or n number of numbers passed in string separated by comma", () => {
    const resultWithTwoNumbers = add("1,1");
    assert.equal(resultWithTwoNumbers, 2);
    const resultWithThreeNumbers = add("1,1,1");
    assert.equal(resultWithThreeNumbers, 3);
  });
  it("should allow new line(\n) instead of comma in string to separate numbers", () => {
    const result = add("1\n1,1");
    assert.equal(result, 3);
  });
  it("should allow delimiter in string to separate numbers", () => {
    const result = add("//;\n1;2");
    assert.equal(result, 3);
  });
});
