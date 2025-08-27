function numInStr(arr) {
    let array = []
    for(let key of arr){
        if(/[a-z]/.test(key) && /[A-Z]/.test(key) && /[0-9]/.test(key)){
            array.push(key)
        }
    }
    return array
}

console.log(numInStr(["1a", "a", "2bXae3", "bM7"]))
console.log(numInStr(["abc", "abC10"]))
console.log(numInStr(["abc", "Ab10c", "a10bc", "bC1d"]))
console.log(numInStr(["this is a test", "tEst1"]))


