const arr = [1, 2, 4, 6, 7, 9];

//input is 1, 2, 4, 6, 7, 9
//output: 3, 5, 8

const findMissingLetters = (arr) => {
    const len = arr.length;

    if(len === 0) return false;
    
    //get the indexes of each element,
    //store in the variable
    //mark the numbers as negative if found in index
    for(let i = 0; i < len; i++) {
        let q = Math.abs(arr[i]) - 1;
        
        arr[q] = Math.abs(arr[q]) * -1;
    }

    let result = [];

    for(let i = 0; i < len; i++) {
        if(arr[i] > 0) {
            result.push(i + 1);
        }
    }

    console.log(result);
};

findMissingLetters(arr);
