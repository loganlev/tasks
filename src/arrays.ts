/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbers2 = [...numbers];
    const len = numbers2.length - 1;
    if (numbers2.length === 0) {
        return [];
    }
    const first = numbers2[0];
    numbers2.splice(0, len, first);
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbers2 = [...numbers];
    const tripled = numbers2.map((numbers2: number): number => numbers2 * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = [...numbers];
    let nums2 = nums.map((num: string): number => parseInt(num));
    nums2 = nums2.map((num: number): number => (isNaN(num) ? (num = 0) : num));
    return nums2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = [...amounts];
    const remover = nums.map((num: string): string =>
        num.includes("$") ? num.slice(1) : num
    );
    let nums2 = remover.map((num: string): number => parseInt(num));
    nums2 = nums2.map((num: number): number => (isNaN(num) ? (num = 0) : num));
    return nums2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messages2 = [...messages];
    const newmessages = messages2.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    const newmessages2 = newmessages.filter(
        (message: string): boolean => !message.includes("?")
    );
    return newmessages2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words2 = [...words];
    const sumwords = words2.filter((word: string): boolean => word.length < 4);
    const sum = sumwords.length;
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colors2 = [...colors];
    if (colors2.length == 0) {
        return true;
    }
    const allcolors = colors2.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors2.length === allcolors.length) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const addends2 = [...addends];
    if (addends2.length === 0) {
        return "0=0";
    }
    const summed = addends2.reduce(
        (first: number, second: number) => first + second,
        0
    );
    const added = addends2.join("+");
    const final = summed + "=" + added;
    return final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const values2 = [...values];
    const negIndex = values2.findIndex((value: number): boolean => value < 0);
    const summed = values2.reduce(
        (first: number, second: number) => first + second,
        0
    );
    const summed2 = values2.slice(0, negIndex);
    const final = summed2.reduce(
        (first: number, second: number) => first + second,
        0
    );
    const plus = negIndex + 1;
    if (negIndex === -1) {
        values2.push(summed);
    } else {
        values2.splice(plus, 0, final);
    }
    return values2;
}
