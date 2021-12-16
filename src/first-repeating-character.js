//first repeating character

const arr = [2, 5, 1, 6, 6];

const firstRepeatingChar = arr => {
    if(arr.length === 0) return undefined;

    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if(obj[arr[i]]) {
            return arr[i];
        }

        obj[arr[i]] = true;
    }

    return undefined;
};
/*
 * obj {
     2: true,
     5: true,
 }
*/
console.log(firstRepeatingChar(arr));