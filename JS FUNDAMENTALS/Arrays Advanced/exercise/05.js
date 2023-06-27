function sort2(arr){
    let sortedArr=arr.sort((a,b)=>{
        return a.length-b.length || a.localeCompare(b)
    })
    sortedArr.forEach(x=>console.log(x))
}

sort2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])