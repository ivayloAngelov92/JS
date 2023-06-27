function solve (arr){
    let result=arr.reduce((acc,curr)=>{
        let [name,lvl,item]= curr.split(' / ')
        let hero={
            name,
            level:Number(lvl),
            items:item ? item.split(', '):[]
        }
        acc.push(hero)
        return acc
    },[])
    console.log(JSON.stringify(result)); 
}

solve (['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);