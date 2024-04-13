// INSERT, SEARCH, DELETE, PREORDER , INORDER, POSTORDDER, LEVELORDER
// MIN , MAX, ISVALIDBST, CLOSESTVALUE

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return false 
        }else{
            return this.searchNode(this.root,value);
        }
    }
    searchNode(root, value){
        if(!root){
            return false;
        }else{
           if(root.value === value){
             return true;
           }else if(value < root.value){
            return this.searchNode(root.left,value)
           }else{
            return this.searchNode(root.right,value);
           }
        }  
    }

    preOrder(){
        if(this.isEmpty()){
            return null;
        }
        this.preOrderNode(this.root);
    }
    preOrderNode(root){
        if(root){
            console.log(root.value);
            this.preOrderNode(root.left);
            this.preOrderNode(root.right);
        }
    }

    postOrder(){
        if(this.isEmpty()){
            return null;
        }
        this.postOrderNode(this.root);
    }
    postOrderNode(root){
      if(root){
          this.postOrderNode(root.left);
          this.postOrderNode(root.right);
          console.log(root.value);
      }
    }

    inOrder(){
        if(this.isEmpty()){
            return null;
        }
        this.inOrderNode(this.root);
    }
    inOrderNode(root){
        if(root){
            this.inOrderNode(root.left);
            console.log(root.value);
            this.inOrderNode(root.right);
        }
      
    }

    levelOrder(){
        let root = this.root;
        let queue = [root];
        
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }

    min(root=this.root){
            if(!root.left){
                return root.value;
            }else{
                return this.min(root.left);
            }
    }

    max(root=this.root){
            if(!root.right){
                return root.value;
            }else{
                return this.max(root.right);
            }
    }
    isValidBST(){
        return this.checkBST(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);
    }
    checkBST(root,min,max){
        if(root === null){
            return true;
        }

        if(root.value <= min || root.value >= max){
            return false;
        }

        return (this.checkBST(root.left,min,root.value) && this.checkBST(root.right,root.value.max))
    }

    closestValue(target){
        let root = this.root;
        let closestValue = this.root.value;
        while(root){
            if(Math.abs(target - root.value) < Math.abs(target-closestValue)){
                closestValue = root.value;
            }
            if(target < root.value){
                root = root.left;
            }else if(target > root.value){
                root = root.right;
            }else{
                break;
            }
        }
        return closestValue;
    }
    
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    deleteNode(root,value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }
        return root;
    }
}

const binarySearchTree = new BST();

binarySearchTree.insert(10)
binarySearchTree.insert(7)
binarySearchTree.insert(12)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(6)
binarySearchTree.insert(8)

// binarySearchTree.inOrder();
// binarySearchTree.preOrder();
// binarySearchTree.postOrder();
// binarySearchTree.levelOrder();
console.log(binarySearchTree.search(28));
console.log(binarySearchTree.min());
console.log(binarySearchTree.max());
console.log(binarySearchTree.isValidBST())
console.log(binarySearchTree.closestValue(13));
binarySearchTree.delete(6);
console.log(binarySearchTree.search(6));


