"use strict";
// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
Object.defineProperty(exports, "__esModule", { value: true });
// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("nearHundred", () => {
    // n close to 100 or 200 by 10
    it("should retrun true if n = 93", () => {
        const result = (0, index_1.nearHundred)(93);
        chai_1.assert.equal(result, true);
    });
    // n close to 100 or 200 by 10
    it("should retrun true if n = 193", () => {
        const result = (0, index_1.nearHundred)(193);
        chai_1.assert.equal(result, true);
    });
    // n not close to 100 or 200 by 10
    it("should retrun false if n = 83", () => {
        const result = (0, index_1.nearHundred)(89);
        chai_1.assert.equal(result, false);
    });
    // n not close to 100 or 200 by 10
    it("should retrun true if n = 189", () => {
        const result = (0, index_1.nearHundred)(189);
        chai_1.assert.equal(result, false);
    });
});
