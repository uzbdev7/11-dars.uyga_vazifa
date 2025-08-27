let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        if(this[type] != undefined) {
            this[type] += amount
            console.log(`${type} xarajat qo'shildi.`)
        }else{
            console.log(`Bunday turdagi xarajat yoq:>> ${type}`)
        }
    },

    removeExpense: function(type, amount) {
     if(type in this) { 
        if(this[type] >= amount) {
            this[type] -= amount
            console.log(`${type} xarajat ${amount} ga oshirildi.`)
        }else{
            console.log(`${type} turdagi xarajat mavjud emas.`)

        }
     }
    },

    printMonthlyReport : function() {
        console.log("Jami oylik xaarajatlar:)")
        console.log(`Suv uchun oylik xarajat: $${this.water}`);
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`);

    let umumiyXarajat = `${this.water} + ${this.gas} + ${this.electricity} = ${this.water + this.gas + this.electricity}`
        console.log(umumiyXarajat)

	},

};

console.log(Expenses.addExpense("water",60))
console.log(Expenses.addExpense("electricity",70))
console.log(Expenses.addExpense("gas",100))

console.log(Expenses.removeExpense("water",20))
console.log(Expenses.removeExpense("electricity",20))
console.log(Expenses.removeExpense("gas",30))

console.log(Expenses.printMonthlyReport())



