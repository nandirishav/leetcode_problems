var partition = function (s) {
    const res = [];
    const n = s.length;

    function palindrome(str) {
        let left = 0, right = str.length - 1;
        while(left < right) {
            if(str[left] !== str[right]) {
                return false;
            }
            left++; right--;
        }
        return true;
    }

    function getAllPartitions(currInd, curr) {
        const isLastPalindrome = palindrome(curr[curr.length - 1]);
        if(currInd === n) {
            if(isLastPalindrome){
                res.push([...curr]);
            }
            return;
        }
        if(isLastPalindrome) {
            curr.push(s[currInd]);
            getAllPartitions(currInd + 1, curr);
            //backtrack
            curr.pop();
        }
        // move the partition
        curr[curr.length - 1] += s[currInd];
        getAllPartitions(currInd + 1, curr);
        //when last substr is not a palindrome
        curr[curr.length - 1] = curr[curr.length - 1].slice(0, -1);
    }
    getAllPartitions(1, [s[0]]);
    return res;
}