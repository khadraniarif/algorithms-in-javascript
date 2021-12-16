//selection sort

const arr = [1, 2, 0, 8, 6];

const selectionSort = arr => {
    let len = arr.length;
    let min = arr[0];

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(arr[j] > arr[j + 1]) { //44 99
                let temp =  arr[j]; //99
                min = arr[j + 1]; //44
                arr[j] = min; //44
                arr[j + 1] = temp; //99
            }
        }
    }

    return arr;
}

console.log(selectionSort(arr));