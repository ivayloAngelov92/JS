function solve (array){
    let townInfo={}

    for(let line of array){
        let [townName, latituded, longtitude]= line.split(' | ')
        townInfo.town=townName
        townInfo.latitude=Number(latituded).toFixed(2)
        townInfo.longitude=Number(longtitude).toFixed(2)
        console.log(townInfo);
    }

}

solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])