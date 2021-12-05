/**
 * @param  {string} value
 * @returns boolean
 */
export const isPalindromic = (value: string): boolean => {
    if (typeof value !== "string" || !value || value.length <= 1) {
        return false;
    }

    const allChars = value.replaceAll(" ", "").toLowerCase();
    const charCount: { [key: string]: number } = {};

    allChars.split("").forEach((char) => {
        if (charCount[char]) {
            charCount[char]++;
        }

        if (!charCount[char]) {
            charCount[char] = 1;
        }
    });

    const numberOfOddChars = Object.keys(charCount).filter(
        (char) => charCount[char] % 2
    );

    return numberOfOddChars.length <= 1;
};
