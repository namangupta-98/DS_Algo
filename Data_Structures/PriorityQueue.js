//Priority Queue: A data structure where each element has a priority associated with them
//Elements with higher priorities are served before elements with low priorities.

//high -> low
//0 -> n

//Application: process management in operating systems.
        
//*Write a min binary heap (lower number mean higher priority)
//*Node(val, priority)
//*enqueue(puts a node in right spot based on priority)
//*dequeue(removes root and rearranges heap using priority)

//               gunshot[0]
//           /                \
//  broken bone[1]          fever[2]
//        /    \              /    \
// cold[3]  stomache[4]  headache[5]  scratch[6]

class Node{
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                        swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap===null && rightChild.priority < element.priority)
                    || (swap!==null && rightChild.priority < leftChild.priority)){
                        swap = rightChildIdx;
                }
            }
            if(swap===null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let pq = new PriorityQueue();
pq.enqueue("fever",2);
pq.enqueue("cold",3);
pq.enqueue("gunshot",0);
pq.enqueue("broken bone",1);
pq.enqueue("headache",4);
pq.enqueue("stomache",5);
pq.enqueue("scratch",6);