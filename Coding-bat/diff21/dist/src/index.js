"use strict";
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
Object.defineProperty(exports, "__esModule", { value: true });
exports.diff21 = void 0;
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
function diff21(n) {
    let result = 0;
    if (n < 21) {
        result = 21 - n;
    }
    else {
        result = (21 - n) * 2 * -1;
    }
    return result;
}
exports.diff21 = diff21;
