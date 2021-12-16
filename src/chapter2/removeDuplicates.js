//input: [1, 3, 3, 5, 6, 7, 2, 1];
//output: [1, 3, 5, 6 7, 2];

const removeDuplicates = arr => {
    let len = arr.length;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j])
                newArr.push(arr[i]);
        }
    }

    return newArr;
}

const arr = [1, 3, 3, 5, 6, 7, 2, 1, 6];
console.log(removeDuplicates(arr));

//Brute force solution O(n^2)

//optimized solution
const removeDuplicates2 = arr => {
    let len = arr.length;

    let obj = {};
    let resultArr = [];

    for(let i = 0; i < len; i++) {
        (obj[arr[i]]) ? resultArr.push(arr[i]) : obj[arr[i]] = arr[i];
    }

    return resultArr;
}

removeDuplicates2([1, 4, 4, 5, 8, 8, 9, 2, 10, 1]);