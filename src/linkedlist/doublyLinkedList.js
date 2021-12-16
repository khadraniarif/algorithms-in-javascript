class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoblyLinkedList {
    constructor(value) {
        this.value = value;
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }
    printList() {
        let current = this.head;
        const arr =  new Array();

        while(current) {
            arr.push(current.value);
            current = current.next;
        }

        return arr;
    }

}

const DoublyLinkedList = new DoblyLinkedList(10);
DoublyLinkedList.append(5);
console.log(DoublyLinkedList.printList());