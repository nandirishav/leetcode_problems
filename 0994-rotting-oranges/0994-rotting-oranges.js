/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    const vis = Array.from({length: m}, () => Array(n).fill(0));
    let fresh = 0;

    // push all rotten in queue
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++) {
            if(grid[i][j] === 2){
                queue.push([i,j,0]);
                vis[i][j] = 2;
            }else if(grid[i][j] == 1){
                fresh++;
            }
        }
    }

    let time = 0;
    const directions = [
        [0,1], [0,-1], [1,0] , [-1, 0]
    ]
    while(queue.length) {
        const [r,c,t] = queue.shift();
        time = Math.max(t,time);
        for(const [dr,dc] of directions) {
            const nR = r + dr;
            const nC = c + dc;
            if(nR >= 0 && nR < m && nC >= 0 && nC < n
            && grid[nR][nC] === 1 && vis[nR][nC] !== 2) {
                queue.push([nR,nC, t + 1]);
                vis[nR][nC] = 2;
                fresh--;
            }
        }
    }
    return fresh == 0 ? time : -1;
};