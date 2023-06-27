function solve (array){
    let vipList=[]
    let regular=[]
    let currentLine=array.shift()
    while(currentLine!=="PARTY"){
        let isVip=isNaN(currentLine[0])
        if(isVip){
            regular.push(currentLine)
        }else{
            vipList.push(currentLine)
        }
        currentLine=array.shift()
    }
    let allGuests=vipList.concat(regular)
    for(let guest of array){
        allGuests.splice(allGuests.indexOf(guest),1)
    }
    console.log(allGuests.length);
    allGuests.forEach(g=> console.log(g))
}

solve (['7IK9Yo0h',

'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])