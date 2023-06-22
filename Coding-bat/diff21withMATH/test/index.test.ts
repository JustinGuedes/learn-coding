// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

import { assert } from "chai";
import { diff21 } from "../src/index";

describe("diff21", () => {
  // n < 21
  it("should return 2 if n = 19", () => {
    const result = diff21(19);
    assert.equal(result, 2);
  });

  // n < 21
  it("should return 11 if n = 10", () => {
    const result = diff21(10);
    assert.equal(result, 11);
  });

  // n > 21
  it("should return 2 if n = 22", () => {
    const result = diff21(22);
    assert.equal(result, 2);
  });

  // n = 21
  it("should return 0 if n = 21", () => {
    const result = diff21(21);
    assert.equal(result, 0);
  });
});
