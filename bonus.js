let studentsList = new Map();

function createStudent(name,data) {
    if(studentsList.has(name)) {
        return `Ushbu ${name} allaqachon mavjud.`
    }else{
        studentsList.set(name,data)
    }
    return studentsList
}

function readStudent(name){
    if(studentsList.has(name)){
        return studentsList.get(name);
    }
    return `${name} nomli ma'lumot mavjud emas.`

}

function updateStudent(name, newData) {
  if (!studentsList.has(name)) {
    return `${name} topilmadi`;
  }

  let oldData = studentsList.get(name);
  let updated = { ...oldData, ...newData };

  studentsList.set(name, updated);
  return updated;
}
function deleteStudent(name) {
    if(studentsList.has(name)){
        studentsList.delete(nama)
        return `${name} o'chirildi.`
    }
    return studentsList
}
// create
console.log(createStudent("Axrorbek",{yosh:20,kasbi:"dasturchi"}))
console.log(createStudent("Nodirbek",{yosh:21,kasbi:"doktor"}))
console.log(createStudent("Asal",{yosh:18,kasb:"tikuvchi"}))
console.log(createStudent("Sevara",{yosh:19,kasb:"oqituvchi"}))
// read
console.log(readStudent("Asal"))
console.log(readStudent("Axrorbek"))
// update
console.log(updateStudent("Axrorbek",{yosh:25,kasbi:"Uchuvchi"}))
console.log(updateStudent("Asal",{yosh:22,kasbi:"Xamshira"}))
// delete
console.log(deleteStudent("Nodirbek"))
