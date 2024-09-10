function isPalindrome(string){
    let lowerIdx = 0;
    let upperIdx = string.length-1;
    const lowerCaseString = string.toLowerCase();
    while(lowerIdx < upperIdx){
        const lowerChar = lowerCaseString.charAt(lowerIdx);
        const upperChar = lowerCaseString.charAt(upperIdx);
        if(!isAlphaNum(lowerChar)){
            lowerIdx++;
        }
        else if(!isAlphaNum(upperChar)){
            upperIdx--;
        }
        else{
            if(lowerChar !== upperChar){
                return false;   
            }
            lowerIdx++;
            upperIdx--;
        }
    }
    return true;

}

function isAlphaNum(char){
    const isAlpha = char.codePointAt(0) > 96 && char.codePointAt(0) < 122;
    const isNumeric = char.codePointAt(0) > 47 && char.codePointAt(0) < 58;
    return isAlpha || isNumeric;
}
/*
console.log("racecar:" + isPalindrome("racecar"));
console.log("fish:" + isPalindrome("fish"));
console.log("abcdefghijklmnop:" + isPalindrome("abcdefghijklmnop"));
console.log("1234567890987654321:" + isPalindrome("1234567890987654321"));
console.log("  alice   e cil  a:" + isPalindrome("  alice   e cil  a"));
console.log("ali  2 2 i l -==/ a:" + isPalindrome("ali  2 2 i l -==/ a"));
*/
