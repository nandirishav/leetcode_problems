/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let i=0,j=0;
    for(let command of commands) {
        switch(command) {
            case 'UP':
                i--;
                break;
            case 'DOWN':
                i++;
                break;
            case 'RIGHT':
                j++;
                break;
            case 'LEFT':
                j--;
                break;
            default:
                break;
        }
    }
    return (i*n) + j;
};