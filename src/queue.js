//an algorithm for queue

//First in First out
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    peek() {
        return this.first;
    }

    enqueque(value) {
         const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
           this.last.next = newNode;
           this.last = newNode;
        }
        this.length++;
    }

    dequeque() {
        if(this.length === 0) {
            return null;
        }

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    } 
}

const myQueue = new Queue();
myQueue.enqueque('Joy');
myQueue.enqueque('Matt');
myQueue.enqueque('Pavel');
myQueue.enqueque('Samir');
myQueue.dequeque();
myQueue.dequeque();
myQueue.dequeque();
myQueue.dequeque();
console.log(myQueue);
//joy
//matt