// function deleteNth(arr, n) {
//   let cleanedArray = [];
//   let numberCounter = {};

//   for (i = 0; i < arr.length; i++) {
//     const key = arr[i];

//     if (numberCounter.hasOwnProperty(key) && numberCounter[key] < n) {
//       numberCounter[key]++;
//       cleanedArray.push(arr[i]);
//     } else if (!numberCounter.hasOwnProperty(key)) {
//       numberCounter[key] = 1;
//       cleanedArray.push(arr[i]);
//     }
//   }
//   return cleanedArray;
// }

deleteNth(
  [
    24, 36, 14, 36, 36, 14, 36, 24, 24, 24, 36, 14, 36, 14, 36, 36, 36, 24, 36,
    24, 24,
  ],
  4
);

// ----------------------------------------
// Best practice
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    console.log(cache[n]);
    return cache[n] <= x;
  });
}
