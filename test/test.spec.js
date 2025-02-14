const { assert } = require("chai");
const { add } = require("../test");

describe("add", () => {
  it("should return 0 for no input", () => {
    const result = add();
    assert.equal(result, 0);
  });
});
