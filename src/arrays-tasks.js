function getIntervalArray(start, end) {
  return Array.from(
    { length: Math.max(0, end - start + 1) },
    (_, index) => start + index
  );
}

function sumArrays(arr1, arr2) {
  return Array.from(
    { length: Math.max(arr1.length, arr2.length) },
    (_, index) => (arr1[index] || 0) + (arr2[index] || 0)
  );
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((value) => value === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((value) => value.length);
}

function getAverage(arr) {
  return arr.length
    ? Math.round(
        (arr.reduce((sum, value) => sum + value, 0) / arr.length) * 100
      ) / 100
    : 0;
}

function isSameLength(arr) {
  return arr.every((value) => value.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return n === 0 ? [] : arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  return n === 1
    ? Array(size).fill(0)
    : Array.from({ length: size }, () => createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce(
    (balance, [income, expense]) => balance + income - expense,
    0
  );
}

function createChunks(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, (index + 1) * chunkSize)
  );
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => index * 2 + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((current, index) => current[index], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (unusedRow, row) =>
    Array.from({ length: n }, (unusedCol, col) => Number(row === col))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce(
    (indices, value, index) =>
      Math.abs(value % 2) === 1 ? [...indices, index] : indices,
    []
  );
}

function getHexRGBValues(arr) {
  return arr.map(
    (value) => `#${value.toString(16).toUpperCase().padStart(6, '0')}`
  );
}

function getMaxItems(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

function findLongestIncreasingSubsequence(nums) {
  return nums.reduce(
    (state, value, index) => {
      const length =
        index > 0 && value > nums[index - 1] ? state.current + 1 : 1;

      return {
        current: length,
        max: Math.max(state.max, length),
      };
    },
    { current: 0, max: 0 }
  ).max;
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((value, index) => Array(index + 1).fill(value));
}

function shiftArray(arr, n) {
  if (!arr.length) {
    return [];
  }

  const shift = ((n % arr.length) + arr.length) % arr.length;

  return arr.slice(-shift).concat(arr.slice(0, -shift || arr.length));
}

function sortDigitNamesByNumericOrder(arr) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return [...arr].sort((a, b) => digits.indexOf(a) - digits.indexOf(b));
}

function swapHeadAndTail(arr) {
  const half = Math.floor(arr.length / 2);

  return arr
    .slice(arr.length - half)
    .concat(arr.length % 2 ? [arr[half]] : [], arr.slice(0, half));
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
