//algorithm to find if  a number is perfect square using binary search

const num = 9;
//          L     M     R
//numbers = 1, 2, 3, 4, 5, 6, 7, 8, 9

const isPerfectSquare = num => {
    //iterate through numbers
    //start from numbers 1 and go until 9.. i.e. max number

    let left =1, right = num;
    while(left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if(middle * middle === num) {
            return true;
        }

        right = middle;
    }

    return false;
};

isPerfectSquare(num);