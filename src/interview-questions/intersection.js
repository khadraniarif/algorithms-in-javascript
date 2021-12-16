const arr1 = [1, 2, 5, 4, 8, 4];
const arr2 = [5, 4, 2, 6, 9, 2];

const arrIntersection = (arr1, arr2) => {
    const len1 = arr1.length;
    const len2 = arr2.length;

    const result = [];
    if(len2 === 0) return arr1;
    let obj = {};
    
    for(let i = 0; i < len1; i++) {
        obj[arr1[i]] = true;
    }
    
    for(let j = 0; j < len2; j++) {
        if(obj[arr2[j]] && result.indexOf(arr2[j]) == -1) {
            result.push(arr2[j]);
        }
    }

    return result;
}
//console.log(arrIntersection(arr1, arr2));

//with the help of Set
const arrIntersection2 = (arr1, arr2) => {
    let mySet = new Set();
    const result = [];
    for(let i = 0; i < arr1.length; i++) {
        mySet.add(arr1[i]);
    }

    for(let j = 0; j < arr2.length; j++) {
        if(mySet.has(arr2[j]) && result.indexOf(arr2[j]) === -1) result.push(arr2[j]);
    }

    return result;
};

console.log(arrIntersection2(arr1, arr2));