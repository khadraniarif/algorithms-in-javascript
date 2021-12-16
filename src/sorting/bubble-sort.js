//bubble sort

const arr = [6, 5, 3, 1, 8, 7, 2, 4];

const bubbleSort = arr => {
   let len = arr.length;
   const resArr = [];
   if(len === 0) return [];

   for(let i = 0; i < len; i++) {
       for(let j = 0; j < len; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
       }
  }

   return arr;
    
};

console.log(bubbleSort(arr));