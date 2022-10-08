// QUESTION 2:
// Given an array A of size N and an integer K. You can start from any index of the array and move either in the right direction or in the left (You can not change directions). You need to figure out the shortest distance you need to walk to get a sum greater than equal to K. If no such answer exists, print -1;

// EXAMPLE:
// Input
// N = 5
// A = [1,2,3,4,5]
// K = 8

// Output
// 2

// Approach
// The answer is 2 as [4,5] is the smallest length array that sum greater than equal to K (as 4+5>8)

// EXAMPLE:
// Input
// N = 5
// A = [1,1,1,1,1]
// K = 6

// Output
// -1

// Approach
// No such subarray with sum greater than equal to K exists

// CONSTRAINTS:
// 1 <= N <=10^5
// 1 <= K <=10^9
// 1 <= A[i] <=10^5

const findSmallestWindowLength = (array, target) => {
    let windowStart = 0;
    let current = 0;
    let minSize = Infinity;
    
    for(let windowEnd = 0; windowEnd < array.length; windowEnd++) {
      current += array[windowEnd];
  
      while(current > target) {
        minSize = Math.min(minSize, windowEnd - windowStart + 1); // size of the window
        current -= array[windowStart];
  
        windowStart++;  
      }
    }
    if(minSize === Infinity){
      return -1;
    }
    return minSize;
  }
  
  
  console.log(findSmallestWindowLength([1,2,3,4,5], 8))
  console.log(findSmallestWindowLength([1,2,1,1,1], 8))