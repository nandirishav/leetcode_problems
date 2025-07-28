/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function dfs(vis, adj, node) {
    vis[node] = 1;
    
    for(const item of adj[node]) {
        if(!vis[item]) {
            dfs(vis, adj, item);
        }
    }
}

var findCircleNum = function(isConnected) {
    const V = isConnected.length;
    const adjList = Array.from({length: V + 1}, () => []);
    for(let i=0;i<V;i++) {
        for(let j=0;j<V;j++){
            if(isConnected[i][j] == 1 && i !== j) {
                adjList[i].push(j);
                adjList[j].push(i);
            }
        }
    }
    const vis = Array.from({length: V + 1}, () => 0);
    let provinces = 0;
    for(let i=0;i<V;i++){
        if(!vis[i]) {
            provinces++;
            dfs(vis, adjList, i);
        }
    }
    return provinces;
};