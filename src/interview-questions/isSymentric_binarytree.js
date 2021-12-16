//determind if tree is symentric or not ?
//it means if we mirror the three from center, the left node of a tree should be equal to right

const isSymentric = root => {
    if(root === null) return true;

    return isMirror(root.left, root.right);
};

const isMirror = (tree1, tree2) => {
    if(tree1 === null || tree2 === null) {
        return tree1 === tree2;
    }

    if(tree1.val !== tree2.val) {
        return false;
    }

    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};



//1, 2, 2, 3, 4, 4, 3 = true
console.log(isSymentric());
