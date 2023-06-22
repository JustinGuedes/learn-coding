// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

import { assert } from "chai";
import { nearHundred } from "../src/index";

describe("nearHundred", () => {
  // n close to 100 or 200 by 10
  it("should retrun true if n = 93", () => {
    const result = nearHundred(93);
    assert.equal(result, true);
  });

  // n close to 100 or 200 by 10
  it("should retrun true if n = 193", () => {
    const result = nearHundred(193);
    assert.equal(result, true);
  });

  // n not close to 100 or 200 by 10
  it("should retrun false if n = 83", () => {
    const result = nearHundred(89);
    assert.equal(result, false);
  });

  // n not close to 100 or 200 by 10
  it("should retrun true if n = 189", () => {
    const result = nearHundred(189);
    assert.equal(result, false);
  });
});
