function countAll(str) {
    let harf = 0
    let raqam = 0
    for(let key of str){
        if(/[a-z]/.test(key) || /[A-Z]/.test(key)){
            harf ++;
        }else if(/[0-9]/.test(key)){
            raqam ++;
        }else{
            console.log(`Siz ${key} belgi kiritdingiz..`)
        }
        
    }
    return `HARFLAR:${harf}, RAQAMLAR: ${raqam}`
}

console.log(countAll("Hello World~"))
console.log(countAll("H3=ll0 Wor1d") )
console.log(countAll("149990"))


