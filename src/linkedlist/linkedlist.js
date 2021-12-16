//create linkedlist

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if(!this.head) return null;

        const newNode = new Node(value);

        let current = this.head;
        let i = 1;

        if(index >= this.length) {
            return this.append(value);
        }

        if(index === 0) {
            return this.prepend(value);
        }

        let leader = this.traverseIndex(index - 1);
        let holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    reverse() {
        let prev = null;
        let currentNode = this.head;
 
        while(currentNode) {
            let next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
 
        return prev;
       //10 --> 15 --> --> 20 -->25
    }

    remove(index) {
        if(index < 0) return this.head;
       
        let leader = this.traverseIndex(index - 1);
        let holdingPointer = leader.next;

        leader.next = holdingPointer.next;
        this.length--;
    }

    traverseIndex(index) {
        let count = 0;
        let current = this.head;

        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    printList() {
        let current = this.head;
        const array = [];

        while(current) {
            array.push(current.value);
            current = current.next;
        }

        return array;
    }
}      

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);
myLinkedList.insert(2, 16);
myLinkedList.prepend(5);

console.log(myLinkedList.reverse());