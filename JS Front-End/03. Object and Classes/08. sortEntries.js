function solve (arr){
    let book={}
    arr.forEach(input=>{
        let [name, address] = input.split(':')
        book[name]=address
    })
    let sorted= Object.entries(book).sort((a,b)=> a[0].localeCompare(b[0]))
    for(let [key,value] of sorted){
        console.log(`${key} -> ${value}`);
    } 
}

solve (['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)