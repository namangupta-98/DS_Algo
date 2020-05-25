class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){  // insert a node at end of the linked list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){  // remove a node from the end of the linked list
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
          newTail = current;
          current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return current;
    }
   shift(){ // return and Delete from Beginning
       if(!this.head) return undefined;
       let current = this.head;
       this.head = current.next;
       this.length--;
       
       if(this.length===0)
        this.tail = null;
       return current;
   }
   unshift(val){ //insert at Beginning  
       let newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = newNode;
       }else{
           newNode.next = this.head;
           this.head = newNode;
       }
       this.length++;
       return this;
   }
   get(index){ //get the node at a particular index
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
   }
   set(index,val){ //update the value of a particular node
       let foundNode = this.get(index);
       if(foundNode){
           foundNode.val = val;
           return true;
       }
       return false;
   }
   insert(index,val){ // insert a node at any index
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!unshift(val);
        if(index === this.length)  return !!push(val);
        
        let newNode = new Node(val);
        let prev = this.get(index-1);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
        return true;
   }
   remove(index){ // remove a node from any index
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return shift();
        if(index === this.length-1)  return pop();

        let prev = this.get(index-1);
        let removed = prev.next;
        prev.next =  removed.next;
        removed.next = null;

        this.length--;
        return removed;        
   }
   reverse(){ //reverse the linked list
       let node = this.head;
       this.head =  this.tail;
       this.tail = node;
       let prev = null;
       let next;
       for(let i=0;i<this.length;i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
       }
       return this;
   }   
   print(){ //print all the values in the linked list
       let arr = [];
       let current = this.head;
       while(current){
           arr.push(current.val);
           current = current.next;
       }
       console.log(arr);
   }
}

let list = new SinglyLinkedList();
list.push("harry");
list.push("ronald");
list.push("hermione");
