import { isPalindromic } from "@/methods/tests/palindrome";

describe("isPalindromic.ts", () => {
    it("correctly assesses that racecar is racecar backwards", () => {
        const testString = "racecar";

        expect(isPalindromic(testString)).toBeTruthy();
    });

    it("correctly assesses that leonidas is not leonidas backwards", () => {
        const testString = "leonidas";

        expect(isPalindromic(testString)).toBeFalsy();
    });

    it("doesn't fail when we test long strings like sentences", () => {
        const testString =
            "hello this is a palindromemordnilap a si siht olleh";

        expect(isPalindromic(testString)).toBeTruthy();
    });

    it("doesn't error when we submit something other than a string", () => {
        const testString = {};

        expect(isPalindromic(testString as string)).toBeFalsy();
    });

    it("doesn't error when we submit an empty string", () => {
        const testString = "";

        expect(isPalindromic(testString)).toBeFalsy();
    });
});
