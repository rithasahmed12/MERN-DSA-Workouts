// addVertex, addEdge, hasEdge, removeEdge, removeVertex, 
// DFS,BFS, display

class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(v1,v2){
        if(!this.adjList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjList[v2]){
            this.addVertex(v2);
        }
        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    removeEdge(v1,v2){
        this.adjList[v2].delete(v1);
        this.adjList[v1].delete(v2);
    }

    hasEdge(v1,v2){
        return (this.adjList[v1].has(v2) && this.adjList[v2].has(v1));
    }

    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return null;
        }
        for(let child of this.adjList[vertex]){
            this.adjList[child].delete(vertex);
        }
        delete this.adjList[vertex];
    }
    
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + " => " + [...this.adjList[vertex]] )
        }
    }

    bfs(startingVertex){
        let visited = {};
        let queue = [startingVertex];
        visited[startingVertex] = true;
        while(queue.length){
            let node = queue.shift();
            console.log(node);

            this.adjList[node].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor);
                }
            });
        }
        for(let vertex in this.adjList){
            if(!visited[vertex]){
                console.log(vertex);
                visited[vertex]=true;
            }
        }
    }
       

    dfs(startingVertex){
        let allvalues = new Set(Object.keys(this.adjList));
        let visited = {};

        const dfsHelper = (vertex) => {
            visited[vertex] = true;
            console.log(vertex);
            allvalues.delete(vertex);

            for(let neighbor of this.adjList[vertex]){
                if(!visited[neighbor]){
                    dfsHelper(neighbor)
                }
            }
        }

        dfsHelper(startingVertex);

        for(let vertex of allvalues){
            if(!visited[vertex]){
                dfsHelper(vertex);
            }
        }

    }
}

// 10 => 20,30
// 20 => 10,
// 30 => 10,

const graph = new Graph();
graph.addVertex(10)
graph.addVertex(20)
graph.addVertex(50)
graph.addVertex(5)
graph.addVertex(15);
graph.addVertex(80);
graph.addVertex(70)
graph.addEdge(10,20)
graph.addEdge(10,50)
graph.addEdge(20,50)
graph.addEdge(5,50)
graph.addEdge(10,50);
graph.addEdge(70,80)

// graph.removeVertex(10);

console.log(graph.adjList)

graph.display();
graph.bfs(5);
