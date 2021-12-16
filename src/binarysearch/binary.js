//Binary Search Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left; 
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) return null;

        let currentNode = this.root;
        
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            } else if(value === currentNode.value) {
                return currentNode.value;
            }
        }

        return false;
    }

    breadthFirstSearch() {
        let currentNode = this.root;

        let list = [];
        let queue = [];

        queue.push(currentNode);

        while(queue.length === 0) {
            currentNode = queue.shift();

            list.push(currentNode.value);

            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    DFSInorder() {
        return this.traverseInOrder(this.root, []);
    }

    traverseInOrder(node, list) {
        if(node.left) {
            this.traverseInOrder(node.left, data);
        }
        list.push(node.value);
        if(node.right) {
            this.traverseInOrder(node.right, data);
        }

        return list;
    }

    traversePreOrder(node, list) {
        list.push(node.value);
        if(node.left) {
            this.traversePreOrder(node.left, data);
        }
        
        if(node.right) {
            this.traversePreOrder(node.right, data);
        }

        return list;
    }

    traversePostOrder(node, list) {
        if(node.left) {
            traversePostOrder(node.left, data);
        }

        if(node.right) {
            traversePostOrder(node.right, data);
        }

        list.push(node.value);
    }
}

const bst = new BinarySearch();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.breadthFirstSearch());
console.log(JSON.stringify(bst));