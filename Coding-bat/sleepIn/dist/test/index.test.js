"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("sleepIn", () => {
    // sleepIn(false, false) → true
    it("should return true when weekday is false and vacation is false", () => {
        const result = (0, index_1.sleepIn)(false, false);
        chai_1.assert.equal(result, true);
    });
    // sleepIn(true, false) → false
    it("should return false when weekday is true and vacation is false", () => {
        const result = (0, index_1.sleepIn)(true, false);
        chai_1.assert.equal(result, false);
    });
    // sleepIn(false, true) → true
    it("should return true when weekday is false and vacation is true", () => {
        const result = (0, index_1.sleepIn)(false, true);
        chai_1.assert.equal(result, true);
    });
});
