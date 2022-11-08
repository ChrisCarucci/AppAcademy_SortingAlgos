
function bubbleSort(arr) {
  let swap = true;

  while (swap) {
    swap = false;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    } }

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
    console.log(arr)
    return arr;
}

module.exports = bubbleSort;