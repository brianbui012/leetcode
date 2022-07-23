function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right - left) / 2);

  while (left < right) {
    if (target === arr[middle]) {
      return middle;
    }

    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((right + left) / 2);
  }

  if (left === right && target === arr[left]) {
    return left;
  }
}
