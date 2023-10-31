// 1. for loops
const studentsArray = [
    { id: 1, name: 'jhon', field: 'doctor' },
    { id: 2, name: 'fred', field: 'software engineer' },
    { id: 3, name: 'nive', field: 'avocat' },
    { id: 4, name: 'wadd', field: 'police' },
    { id: 5, name: 'bed',  field: 'agronome' },
    { id: 6, name: 'feldy', field: 'teacher' },
    { id: 7, name: 'jean',  field: 'nurse' },
]

// 1.for loop
for (let i =0; i< studentsArray.length; i= i+1){
console.log(studentsArray[i])
}
// 2. for Each
studentsArray.forEach((item, index) => {
// console.log(index, '->', item)
})

const newArray = studentsArray.map((item, index) =>{
console.log(index, '->', item )
item.age = index + 10
return `<h2>item ${item.name, item.field}</h2>`
})
