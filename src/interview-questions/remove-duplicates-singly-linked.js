//remove duplicates froms sorted list
//you are given a singly linked list in sorted order
//remove duplicates and only display unique ones

const linkedList = [1, 1, 2, 3, 3, 4];
class Node {
    constructor(value, head = null, next = null, tail = null) {
        this.value = value;
        this.head = head;
        this.next = next;
        this.tail = tail;
    }
}
const removeDuplicates = linkedList => {
    let currentNode = this.head;

    if(!currentNode) return false;

    while(currentNode !== null) {

        if(currentNode.value === currentNode.next.value) {
            currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
    }

    return linkedList;

};
//1->1->2->3->3->4

console.log(removeDuplicates());