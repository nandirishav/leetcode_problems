/**
 * @param {string[]} words
 * @return {string}
 */

var checkPalindrome = function(word) {
    let i=0;j=word.length - 1;
    while(i <= j) {
        if(word[i] === word[j]){
            i++;
            j--;
        }else {
            return false;
        }
    }
    return true;
}

var firstPalindrome = function(words) {
    for (let word of words) {
            if (checkPalindrome(word)) {
                return word;
            }
    }
    return "";
};