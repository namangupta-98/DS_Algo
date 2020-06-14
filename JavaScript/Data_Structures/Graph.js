//Undirected Graph
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
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
graph.addVertex("tokyo");
graph.addVertex("dallas");
graph.addVertex("chicago");
graph.addEdge("chicago","dallas");
graph.addEdge("chicago","tokyo");