// Standard way of doing window slider
const findAveragesOfSubarray = (array, k) => {
    const result = [];
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        // windowSum cumulates the window and builds it up till we hit k size
        windowSum += array[windowEnd];
        
        // window size of 0 to k - 1, if k was 3, we will go into this if statement
        // at [0,1,2] which = k = 3

        // this if statement is not triggered till the window size is equal to k
        if(windowEnd >= k - 1) {
            result.push(windowSum/k);

            // now we subtract from the head of the window, and then increment
            windowSum -= array[windowStart];
            windowStart++;
        }
    }

    return result;
}


const findMax = (array, length, k) => {
    const windowArray = [];
    // creates a window from 0 to k exclusiding so if k = 3, we get 3 length in array
    for(let i = 0; i < k; i++) {
        windowArray.push(array[i]);
    }
  
  
    // pops and adds in the array k
    for(let i = 0; i < array.length - k; i++) {
      windowArray.shift();
      windowArray.push(array[i + k]);
      console.log(windowArray)
    }
  }
  