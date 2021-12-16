//stacks

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.top = null;
        this.bottom = null;
        this.value = value;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }

    pop() {
        if(!this.top) return null;

        if(this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Yahoo');
myStack.push(30);
console.log(myStack);