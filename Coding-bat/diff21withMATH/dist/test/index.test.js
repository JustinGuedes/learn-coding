"use strict";
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
Object.defineProperty(exports, "__esModule", { value: true });
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("diff21", () => {
    // n < 21
    it("should return 2 if n = 19", () => {
        const result = (0, index_1.diff21)(19);
        chai_1.assert.equal(result, 2);
    });
    // n < 21
    it("should return 11 if n = 10", () => {
        const result = (0, index_1.diff21)(10);
        chai_1.assert.equal(result, 11);
    });
    // n > 21
    it("should return 2 if n = 22", () => {
        const result = (0, index_1.diff21)(22);
        chai_1.assert.equal(result, 2);
    });
    // n = 21
    it("should return 0 if n = 21", () => {
        const result = (0, index_1.diff21)(21);
        chai_1.assert.equal(result, 0);
    });
});
