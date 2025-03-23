export const rangeArray = (min = 1, max = 5) => {
    return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}