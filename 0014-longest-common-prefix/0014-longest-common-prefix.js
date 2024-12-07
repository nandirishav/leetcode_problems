/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstWord = strs[0];
    let mini = firstWord.length;
    for(let i=1;i<strs.length;i++){
        const curr_word = strs[i];
        let idx=0;
        for(let j=0;j<curr_word.length;j++){
            if(curr_word[j] === firstWord[j] && idx === j){
                idx++;
            }
        }
        mini = Math.min(idx,mini);
    }
    console.log(mini, 'mini');
    return mini > 0 ? firstWord.slice(0,mini) : "";
};