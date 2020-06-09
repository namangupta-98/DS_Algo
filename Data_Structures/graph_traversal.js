class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){//adding a vertex
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){//adding an edge between vertices
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){//remove edge between vertices
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }
    removeVertex(vertex){//remove a vertex
        while(this.adjacencyList[vertex].length){//edge removal
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];//vertex removal
    }
    depthFirstRecursive(start){ //depth first search using recursion
        const visited = {};
        const result = [];
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })
        })(start);
        return result;
    }
    depthFirstIterative(start){ //depth first search using iteration
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breadthFirst(start){ //breadth first search
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","C");
graph.addEdge("E","F");

graph.depthFirstRecursive("A");

graph.depthFirstIterative("A");
//  {
//      A:[B,C],
//      B:[A,D],
//      C:[A,E],
//      D:[B,E,F],
//      E:[D,C,F],
//      F:[D,E],
//  }

