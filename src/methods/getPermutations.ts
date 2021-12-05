// ["r", "a", "c", "e", "c", "a", "r"]

// const getPermutationArrays = (
//     value: any,
//     index: number,
//     originalArray: any[]
// ): any[] => {
//     let result: any[] = [];

//     return result;
// };

export const getPermutations = (value: string): string[] => {
    if (!value.length) {
        return [];
    }

    if (value.length === 1) {
        return [value];
    }

    const result: string[] = [];

    for (let i = 0; i < value.length; i++) {
        const currentCharacter = value[i];
        const remainingCharacters =
            value.slice(0, i) + value.slice(i + 1, value.length);

        for (const permutation of getPermutations(remainingCharacters)) {
            result.push(currentCharacter + permutation);
        }
    }

    return result;
};
