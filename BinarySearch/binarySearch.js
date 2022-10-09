// How Binary Search usually goes is 
// We have two pointers, we search the middle and if the target is less than mid , we move the right pointer middle - 1
// If the target is too high then we move the pointer to middle + 1

// remember that middle is calculated as middle = leftPointer + rightPointer / 2


const BinarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;


  while(start <= end) { // maybe its start <= end
    let middle = Math.floor((end + start) / 2);
    if(array[middle] === target) {
      return middle;
    }

    if(array[middle] > target) {
      end = middle - 1;
    } else if (array[middle] < target) {
      start = middle + 1;
    }
  
  }
  return -1;
}
