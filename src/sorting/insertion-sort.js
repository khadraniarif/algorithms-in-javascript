const arr = [1, 2, 0, 8, 6, 3];

const insertionSort = arr => {
    let len = arr.length;

    for(let i = 0; i < len; i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >=0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j -1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort(arr));