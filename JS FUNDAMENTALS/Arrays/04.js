function solve (array){
    for(let i =0; i<array.length/2; i++){
        let oldElement=array[i]
        let previousIdex=array.length-1-i
        array[i]=array[previousIdex]
        array[previousIdex]=oldElement
    }
    console.log(array.join(" "));
}

solve (['a', 'b', 'c', 'd', 'e'])