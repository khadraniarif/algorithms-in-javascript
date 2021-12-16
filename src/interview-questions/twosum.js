const arr = [2, 7, 6, 13, 11, 15];

const twoSums = (num, target) => {
    const myMap = new Map();

    for(let i = 0; i < num.length; i++) {
        if(myMap[num[i]] >= 0) return [myMap[num[i]], i];
        
        myMap[target - num[i]] = i;

        console.log(myMap);
    }
};

console.log(twoSums(arr, 9));