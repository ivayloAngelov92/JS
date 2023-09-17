function solve (arr){
    let person={}
    arr.forEach(input=>{
        let [name, phone] = input.split(' ')
        person[name]=phone
    })
    for(let key in person){
        console.log(`${key} -> ${person[key]}`);
    } 
}

solve (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])