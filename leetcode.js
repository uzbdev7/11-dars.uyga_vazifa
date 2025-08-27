function similarPairs(str) {
    const words = new Map();
    
    for (let char of str) {
        const key = [...new Set(char)].sort().join("");
        words.set(key, (words.get(key) || 0) + 1);
    }

    let count = 0;
    for (let value of words.values()) {
        count += (value * (value - 1)) / 2;
    }
    return count;
}

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"])); 
console.log(similarPairs(["aabb","ab","ba"]));                
console.log(similarPairs(["nba","cba","dba"]));  
 
words.array.forEach((key,value) => {
    count += (words[key] * (words[key] - 1)) / 2

});            
