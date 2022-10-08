// Standard way of doing window slider
const findAveragesOfSubarray = (array, k) => {
    const result = [];
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd];

        if(windowEnd >= k - 1) {
            result.push(windowSum/k);

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
  