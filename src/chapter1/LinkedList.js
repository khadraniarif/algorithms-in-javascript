class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
      const newNode = {
          value: value,
          next: null
      }

      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++; 
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(value);
        }

        const newNode = {
          value: value,
          next: null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
      }
      traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }

      remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
      }
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(8);
myLinkedList.append(50);
myLinkedList.prepend(1);
myLinkedList.prepend(0);
myLinkedList.prepend(3);
myLinkedList.insert(20, 38);
myLinkedList.insert(2, 66);
myLinkedList.remove(4);
myLinkedList.printList();
console.log(myLinkedList.printList());