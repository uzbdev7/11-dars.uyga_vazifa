let list = {

    tasks:[],

    addTask(task) {
        this.tasks.push(task)
        console.log(`${task} vazifasi qo'shildi.`)
    },

    removeTask(id){
        if(id >= 0 && id <= this.tasks.length){
            const newTask = this.tasks.splice(id,1)
            console.log(newTask)
        }else{
            console.log(`${id} bu id mavjud emas.`)
        }
    },

    printTask(){
        if(this.tasks.length == 0) {
            console.log("list bo'sh")
        }else {
            console.log(this.tasks)
        }

    },

}

console.log(list.addTask("Uyga vazifa qilish"))
console.log(list.addTask("Sport bilan shug'ullanish"))
console.log(list.addTask("kino  ko'rish"))
console.log(list.addTask("Musiqa tinglash"))
console.log(list.addTask("Uyni tozalash"))
console.log(list.removeTask(2))
console.log(list.printTask())

