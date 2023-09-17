function solve (array){
    let list={}
    array.forEach(person=>{
        if(!list[person]){
            list[person] = person.length
        }
    })
    for(let person in list){
        console.log(`Name: ${person} -- Personal Number: ${list[person]}`);
    }
}

solve ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )