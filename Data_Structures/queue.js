//Queue: FIFO First In First Out
//Applications: waiting to join in video games
//              background tasks
//              uploading/downloading of same size
//              best example: printing
// insertion/removal: O(1)
// searching/access: O(n)
 class Node{
     constructor(val){
         this.val = val;
         this.next = null;
     }
 }

 class Queue{
     constructor(){
         this.first = null;
         this.last = null;
         this.size = 0;
     }
     enqueue(val){
         let newNode = new Node(val);
         if(!this.first){
             this.first = newNode;
             this.last = newNode;
         }else{
             this.last.next = newNode;
             this.last = newNode;
         }
         return ++this.size;
     }
     dequeue(){
         if(!this.first) return null;
         let temp = this.first;
         if(this.size===1){
               this.last = null;
         }
         this.first = this.first.next;
         this.size--;
         return temp.val;
     }
 }

 let queue = new Queue();
 queue.enqueue("harry");
 queue.enqueue("ronald");
 queue.enqueue("hermione");