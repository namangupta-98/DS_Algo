class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
   }
   push(val){  // push a node at the end of linked list
       let newNode = new Node(val);
       if(this.length===0){
           this.head = newNode;
           this.tail = newNode;
       }else{
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
       }
       this.length++;
       return this;
   }
   pop(){  // remove a node from the end of the linked list
       if(!this.head) return undefined;
       let poppedNode = this.tail;
       if(this.length===1){
           this.head = null;
           this.tail = null;
       }else{
           this.tail = poppedNode.prev;
           this.tail.next = null;
           poppedNode.prev = null;
       }
       this.length--;
       return poppedNode;
   }
   shift(){ // remove the head of the linked list
       if(!this.head) return undefined;
       let oldHead = this.head;
       if(this.length===1){
           this.head = null;
           this.tail = null;
       }else{
           this.head = oldHead.next;
           this.head.prev = null;
           oldHead.next = null;
       }
       this.length--;
       return oldHead;
   }
   unshift(val){ // insert a node at the head of the linked list
       let newNode = new Node(val);
       if(this.length===0){
           this.head = newNode;
           this.tail = newNode;
       }else{
           this.head.prev = newNode;
           newNode.next = this.head;
           this.head = newNode;
       }
       this.length++;
       return this;
   }
   get(index){ //get a node at a particular index
     if(index<0 || index>=this.length) return null;
     let count, current;
     if(index<=this.length/2){
         count =0;
         current = this.head;
         while(index !== count){
             current = current.next;
             count++;
         }
     }else{
         count = this.length -1;
         current = this.tail;
         while(count !== index){
             current = current.prev;
             count--;
         }
     }
     return current;
   }
   set(index,val){ //update a value on an existing node in the linked list
       let found = this.get(index);
       if(found !== null){
           found.val = val;
           return true;
       }
       return false;
   }
   insert(index,val){ //insert a node at a particular index in the linked list
     if(index<0 || index>this.length) return false;
     if(index===0) return !!this.unshift(val);
     if(index===this.length) return !!this.push(val);

     let beforeNode = this.get(index-1);
     let newNode = new Node(val);
     let afterNode = beforeNode.next;
       
     beforeNode.next = newNode, newNode.prev = beforeNode;
     newNode.next = afterNode, afterNode.prev = newNode;

     this.length++;
     return true;
   }
   remove(index){ //remove a node at a particular index in the linked list
       if(index<0 || index>this.length) return undefined;
       if(index===0) return this.shift();
       if(index===this.length-1) return this.pop();

       let removedNode = this.get(index);
        
       removedNode.prev.next = removedNode.next;
       removedNode.next.prev = removedNode.prev;
       
       removedNode.next = null;
       removedNode.prev = null;

       this.length--;
       return removedNode;
   }
}

let list = new DoublyLinkedList();
list.push("harry");
list.push("ronald");
list.push("hermione");
