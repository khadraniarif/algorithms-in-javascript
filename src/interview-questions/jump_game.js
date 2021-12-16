const jumpGame = arr => {
    if(!arr) return false;
    let validIndex = arr.length - 1;
    for(let j = arr.length - 2; j >=0; j--) {
        if(j + arr[j] >= validIndex) {
            validIndex = j;
        }
    }

    return validIndex;
}

console.log(jumpGame([2, 1, 1, 4]));