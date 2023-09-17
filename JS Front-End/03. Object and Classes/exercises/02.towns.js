function printObjects(array){
    array.forEach(town=>{
        let [townName,latitude,longitude] =town.split(' | ')
        console.log({
            town:townName,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        });
    })
}

printObjects(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)