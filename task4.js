function checkout(products) {
    let sum = 0
    for(let key of products){
        let jami = key.prc * key.qty
        if(key.taxable) {
            jami *= 1.06
        }
        sum +=jami
    }
    return sum.toFixed(1)

}
console.log(checkout([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]))