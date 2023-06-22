import { assert } from "chai";
import { sleepIn } from "../src/index";

describe("sleepIn", () => {

    // sleepIn(false, false) → true
    it("should return true when weekday is false and vacation is false", () => {
        const result = sleepIn(false, false)
        assert.equal(result, true)
    })

    // sleepIn(true, false) → false
    it("should return false when weekday is true and vacation is false", () => {
        const result = sleepIn(true, false)
        assert.equal(result, false)
    })

    // sleepIn(false, true) → true
    it("should return true when weekday is false and vacation is true", () => {
        const result = sleepIn(false, true)
        assert.equal(result, true)
    })

})
