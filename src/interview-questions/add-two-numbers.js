//add two number given in empty non negative linked list
//Input is L1 = 2 -> 4 -> 3
/*
           L2 = 5 -> 6 -> 4
Output    
           7 -> 0 -> 8
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const addTwoNumbers = (l1, l2) => {
    //iterate through linked lists
    let result = new Node(0);
    let currentNode = result;

    let carryOver = 0;
    let v1 = 0;
    let v2 = 0;
    let sum = 0;
    while(l1 || l2) {
        v1 = l1.value;
        v2 = l2.value;

        sum = v1 + v2 + carryOver;
        result.push(sum);

        carryOver = Math.floor(sum / 10);
        sum = sum % 10;

        currentNode.next = new Node(sum);
        result = currentNode.next;

        l1 = l1.next;
        l2 = l2.next;
    }

    return result.next;
}
console.log(addTwoNumbers(l1, l2));
