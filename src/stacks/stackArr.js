class StackArr {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
    }

    peek() {
        this.array[this.array.length - 1];
    }

    pop() {
        return this.array.pop();
    }
}

const stack = new StackArr();
stack.push("Google");
stack.push("Udemy");
stack.push("yahoo");
stack.pop();
console.log(stack);