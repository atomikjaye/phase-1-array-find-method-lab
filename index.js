// code your solution here
// const record = [
//   { year: "2015", result: "W" },
//   { year: "2014", result: "N/A" },
//   { year: "2013", result: "L" },
//   //...
// ]

// function superbowlWin(arr) {
//   let found;
//   arr.find(item => {
//     if (item.result === 'W') {
//       found = item.year
//     }
//   })
//   return found
// }
// console.log(superbowlWin(record))

// function superbowlWin(arr) {
//   // let found
//   arr.find(item => {
//     if (item.result === 'W') {
//       // found = item.year
//       console.log(item.year)
//       return item.year
//     } else {
//       console.log(undefined)
//       return undefined
//     }
//   })
// }

// function superbowlWin(arr) {
//   let found = arr.find(item => item.year === 'W')
//   return found
// }

function superbowlWin(arr) {
  // debugger
  let found = arr.find(item => item.result === 'W')
  return found === undefined ? undefined : found.year
  // console.log(found)
  // return found.year
}
