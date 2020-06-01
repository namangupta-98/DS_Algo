class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1; 
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newnode = new Node(val);
        if(this.root === null){
            this.root = newnode;
            return this;
        }
        else{
            let current = this.root;

            while(true){

                if(val < current.val){
                    if(current.left === null){
                        current.left = newnode;
                        return this;
                    }
                    current = current.left;
                }
                else if(val > current.val){
                    if(current.right === null){
                        current.right = newnode;
                        return this;
                    }
                    current = current.right;
                }
                else{
                     current.count++;
                     return this;
                }
            }
        }
        return this;
    }
    find(val){
        if(this.root === null) return false;
        let current = this.root;
        while(current){
            if(val<current.val){
                current = current.left;
            }else if(val>current.val){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    bfs(){ //breadth first search
        let data = [], queue = [], node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    //depth first search
    dfs_preorder(){ //root left right
        let data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    dfs_postorder(){ //left right root
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    dfs_inorder(){//left root right
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(5);
tree.insert(8);
tree.insert(13);
tree.insert(11);
tree.insert(15);


//      10   count = 2
//   /      \
//  6        13
// / \      / \  
//5  8     11  15

//insertion : O(n), Θ(log n), Ω(log n)
//searching : O(n), Θ(log n), Ω(log n)