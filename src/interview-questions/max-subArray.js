//return max sub array
//given an array return maximum subarray number
//steps:
 /*
  * take 2 variables 
  * maxCurrent = first element of an array
  * maxGlobal = first element of an array
  * start from second index of an array, since we already have started from 1st index
  * add it, and get max number
  * check if maxCurrent is greater than put it on maxGlobal 
  */

  const maxSubArray = arr => {
      const len = arr.length;

      if(len === 0) return false;

      let maxCurrent = arr[0];
      let maxGlobal = arr[0];

      for(let i = 0; i < arr.length; i++) {
          maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

          if(maxCurrent > maxGlobal) {
              maxGlobal = maxCurrent;
          }
      }

      return maxGlobal;
  };

  const arr = [-1, 2, 3, -5, 4];
  console.log(maxSubArray(arr));