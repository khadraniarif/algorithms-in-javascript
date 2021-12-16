//locate indices from target number

//input : [2, 7, 8, 9]
//target: 9;

//Output: [0, 1]

const findIndices = (arr, target) => {
    let newList = new Map();
    
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let compliment = target - current;

        if(newList.has(compliment)) {
            return [newList.get(compliment), i];
        } else {
            newList.set(current, i);
        }
    }

}

const arr = [2, 7, 8, 9];
console.log(findIndices(arr, 9));