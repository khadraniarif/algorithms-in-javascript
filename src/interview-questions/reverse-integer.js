//reverse integer
//given a number reverse the integer
//input 512, output should be 215

const reverseInt = num => {
    let reversed = num;
    let current = 0;

    while(num > 0) {
        reversed = (reversed * 10) + (num % 10);

        num = reversed / 10;
    }

    return num;
};

console.log(reverseInt(512));