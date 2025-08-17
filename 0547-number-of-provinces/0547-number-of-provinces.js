/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const V = isConnected.length;
    const adjList = Array.from({length: V}, () => []);
    for(let i=0;i<V;i++) {
        for(let j=0;j<V;j++) {
            if(isConnected[i][j] == 1 && i !== j) {
                adjList[i].push(j);
            }
        }
    }
    const vis = Array(V).fill(0);
    const queue = [];
    let provinces = 0;

    for(let i=0;i<V;i++) {
        if(!vis[i]) {
            provinces++;
            bfs(vis, adjList, i);
        }
    }
    return provinces;
};

const bfs = function (vis, adj, node) {
    vis[node] = 1;
    const queue = [node];
    
    while(queue.length) {
        const node = queue.shift();
        for(const item of adj[node]) {
            if(!vis[item]) {
                queue.push(item);
                vis[item] = 1;
            }
        }
    }
}