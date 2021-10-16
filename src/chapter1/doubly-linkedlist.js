//Linked List double

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
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
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++; 
    }

    prepend(value) {
        const newNode = new Node(value);

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        length++;
    }

    insert(index, value) {

        if(index >= this.length) {
            this.append(value);
        } else if(index === 0) {
            this.prepend(value);
        } else {
            const newNode = new Node(value);

            const prevNode = this.traverse(index - 1);
            const nextNode = prevNode.next;
            
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length++;

        }
    }

    remove(index) {
        //[5, 2, 4, 10, 15]
        let currentNode = this.traverse(index - 1);
        let nextNode = currentNode.next;

        currentNode.next = nextNode.next;
        this.length--;
    }

    traverse(index) {
        let currentNode = this.head;
        let counter = 1;

        while(counter <= index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    printList() {
        let currentNode = this.head;
        const nodeArr = [];

        while(currentNode) {
            nodeArr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodeArr;
    }
}

const dblLinkedList = new DoubleLinkedList(10);
dblLinkedList.append(15);
dblLinkedList.prepend(5);
dblLinkedList.insert(1, 2);
dblLinkedList.insert(2, 4);
dblLinkedList.remove(1);
dblLinkedList.remove(2);
dblLinkedList.printList();
//add first node
//10 -> 15 -> 20
//   <-    <-
