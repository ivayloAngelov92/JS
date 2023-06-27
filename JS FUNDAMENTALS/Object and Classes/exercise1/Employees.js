function solve(list) {
    let employeeList = {}
    list.forEach(person => {
        employeeList[person] = person.length
        console.log(`Name: ${person} -- Personal Number: ${person.length}`);
    })
    // list.forEach(person=>{
    //     employeeList[person]=person.length
    // })
    // for(let key in employeeList){
    //     console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    // }
}

solve([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])