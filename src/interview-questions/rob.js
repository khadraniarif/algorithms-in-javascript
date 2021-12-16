//rob the house, maximum profit

const rob = arr => {
    if(!arr && arr.length === 0) return false;

    if(arr.length === 1) return arr[0];

    let total = [];
    total[0] = arr[0];
    total[1] = Math.max(arr[0], arr[1]);

    for(let i = 2; i < arr.length; i++) {
        total[i] = Math.max(total[i - 1], total[i - 2] + arr[i]);
    }

    return total[arr.length - 1];
};
const arr = [2, 1, 5, 7];
console.log(rob(arr));