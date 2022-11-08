// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    return arr;
  }
    // If so, it's already sorted: return

  // Divide the array in half
  let firstHalf = arr.slice(0, arr.length/2)
  let secondHalf = arr.slice(arr.length/2)

  console.log("First Half: " + firstHalf)
  console.log("Second Half: " + secondHalf)

  // Recursively sort the left half
  let sort1 = mergeSort(firstHalf)

  // Recursively sort the right half
  let sort2 = mergeSort(secondHalf)

  console.log("Sort 1: " + sort1)
  console.log("Sort 2: " + sort2)
  console.log("------------------")

  // Merge the halves together and return
  return merge(sort1, sort2)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let ret = [];
  // Point to the first value of each array
  let pointA = 0;
  let pointB = 0;
  // While there are still values in each array...
  while(pointA + pointB < arrA.length + arrB.length) {
    // Compare the first values of each array
    if (pointB === arrB.length || arrA[pointA] < arrB[pointB]) {
      // Add the smaller value to the return array
      ret.push(arrA[pointA])
      // Move the pointer to the next value in that array
      pointA++
    } else {
      ret.push(arrB[pointB])
      // Move the pointer to the next value in that array
      pointB++
    }
  
  }
  // Return the return array
  return ret;

}



module.exports = [merge, mergeSort];

