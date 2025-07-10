// array-utils.js

// 1. Get unique values from array
function getUnique(arr) {
  return [...new Set(arr)];
}

// 2. Flatten nested arrays
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// 3. Find max number
function findMax(arr) {
  return Math.max(...arr);
}

// 4. Remove falsy values
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// 5. Chunk array
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Exporting
export { getUnique, flattenArray, findMax, removeFalsy, chunkArray };

