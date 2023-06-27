function solve (arr){
let towns=[]
    for(let i=1; i<arr.length;i++){
        let tokens=arr[i].split('|').map((el)=>el.trim())
        let town=tokens[1]
        let latitude=Number(tokens[2]).toFixed(2)
        let longtitude=Number(tokens[3]).toFixed(2)
        const currentObj={
            Town:town,
            Latitude:Number(latitude),
            Longitude:Number(longtitude)
        }
        towns.push(currentObj)

    }
    console.log(JSON.stringify(towns));
}

solve ([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
])