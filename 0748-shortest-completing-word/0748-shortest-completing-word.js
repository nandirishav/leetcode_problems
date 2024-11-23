/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    // all letters of licenceplate string should be used
    // word has to be shortest
    // if multiple ans exist -> return the first one
    const refinedString = licensePlate.replaceAll(" ", "").replace(/[0-9]/g, '').toLowerCase();
    let sortWords = [...words].sort((a,b) => a.length - b.length);
    for(let word of sortWords){
        let copyLicense = refinedString;

        for(let i = 0;i < word.length;i++){
            copyLicense = copyLicense.replace(word[i],'');
            if(!copyLicense) return word;
        }  
    }
    
    
    
};