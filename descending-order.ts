// export function descendingOrder(n: number): number {
//   // your code here
//   let result: string[] = [];
//   let numbers = n.toString().split("");
//   let condition = numbers.length;
//   function helper() {
//     let max = 0;
//     let deleteAt = 0;
//     numbers.forEach((number, index) => {
//       let num = parseInt(number);

//       if (num > max) {
//         max = num;
//         deleteAt = index;
//       }
//     });
//     result.push(max.toString());
//     console.log(result);
//     delete numbers[deleteAt];
//     if (result.length !== condition) {
//       helper();
//     }
//   }
//   helper();

//   return parseInt(result.join(""));
// }

console.log(descendingOrder(732045092));

// BEST PRACTICE
export function descendingOrder(
  n: number | null | undefined
): number | null | undefined {
  return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
}
