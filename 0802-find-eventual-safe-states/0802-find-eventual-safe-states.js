/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    // here graph is adj list
    const V = graph.length;
    const vis = Array(V).fill(0);
    const pathVis = Array(V).fill(0);
    const check = Array(V).fill(0);
    const safeNodes = []; 
    
    for(let i=0;i<V;i++) {
        if(!vis[i]) {
            dfs(i, graph, vis, pathVis, check);
        }
    }
    for(let i=0;i<V;i++) {
        if(check[i]) {
            safeNodes.push(i);
        }
    }
    return safeNodes;
};

var dfs = function (node, adj, vis, pathVis, check) {
    vis[node] = 1;
    pathVis[node] = 1;
    check[node] = 0;

    for(const neighbour of adj[node]) {
        // when node is not visited
        if(!vis[neighbour]) {
            if (dfs(neighbour, adj, vis, pathVis, check)) {
                check[node] = 0;
                return true;
            }
        }
        // when node is visited and also pathVisited
        else if(pathVis[neighbour]) {
            check[node] = 0;
            return true;
        }
    }
    check[node] = 1;
    pathVis[node] = 0;
    return false;
}