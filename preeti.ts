// function sortarra(arr: Array<number>) {
//   return arr.sort((a, b) => a - b);
// }

// let a = sortarra([1, 412, 4, 1, 412, 43, 2, 11, 4]);

// console.log(a);

// function reverseAndCapitalizeFirst(str: string) {
//   let words = str.split(" ");
//   let reversedAndCapitalized = words.map((word) => {
//     let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
//     return capitalized.split("").join("");
//   });
//   return reversedAndCapitalized.reverse().join(" ");
// }

// let b = reverseAndCapitalizeFirst("i love india");

// console.log(b);

// let anshu = "my name is sna"

// function patternToOutput(s: string) {
//   let output = "";
//   s.split("").forEach((a) => {
//     if (isNaN(a)) {
//       output += a;
//     } else {
//       output += output[output.length - 1].repeat(parseInt(a) - 1);
//     }
//   });
//   return output;
// }

// let c = patternToOutput("a2b2c3d3");

// console.log(c);

// function anshu(name: string, num: number) {
//   return name.repeat(num);
// }

// console.log(anshu("an", 3));

// let av = "anshu";

// console.log(isNaN(av));
