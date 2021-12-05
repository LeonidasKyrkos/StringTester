import { isPalindromic } from "@/methods/tests/palindrome";

describe("HelloWorld.vue", () => {
    it("correctly assesses that racecar is racecar backwards", () => {
        const testString = "racecar";

        expect(isPalindromic(testString)).toBeTruthy();
    });

    it("correctly assesses that leonidas is not leonidas backwards", () => {
        const testString = "leonidas";

        expect(isPalindromic(testString)).toBeFalsy();
    });

    it("doesn't fail when we test long strings like sentences", () => {
        const testString = "hello there my name is leo and I'm from Suffolk";

        expect(isPalindromic(testString)).toBeFalsy();
    });

    it("doesn't error when we submit something other than a string", () => {
        const testString = {};

        expect(isPalindromic(testString as string)).toBeFalsy();
    });

    it("doesn't error when we submit an empty string", () => {
        const testString = "";

        expect(isPalindromic(testString)).toBeFalsy();
    });

    /**
     * This test is a bit daft because it could entirely depend upon the system you're running the test in
     * but it should be possible to emulate whatever our expected "low performance machine" might be and run a test
     * in there.
     **/
    it("satisfies performance requirements", () => {
        const testString =
            "hello there my name is leo and I'm from Suffolk hello";
        const performanceBenchmark = 250;
        const startTime = window.performance.now();

        isPalindromic(testString);

        const endTime = window.performance.now();

        expect(endTime - startTime < performanceBenchmark).toBeTruthy();
    });
});
