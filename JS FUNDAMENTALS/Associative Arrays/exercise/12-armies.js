function solve(input) {
    let armyObject={}
    for(line of input){
        if(line.includes('arrives')){
            let leader=line.split(' arrives')[0]
            if(!armyObject[leader]){
                armyObject[leader]={}
            }
        }
        if(line.includes(': ')){
            let [leader, army]=line.split(': ')
            let [armyName,count]=army.split(', ')
            if(armyObject[leader]){
                armyObject[leader][armyName]=Number(count)
            }
        }
        if(line.includes(' + ')){
            let [armyName,count]=line.split(' + ')
            for(let leader in armyObject){
                if(armyObject[leader][armyName]){
                    armyObject[leader][armyName]+=Number(count)
                    break;
                }
            }
        }
        if(line.includes(' defeated')){
            let leader=line.split(' defeated')[0]
            delete armyObject[leader]
        }
        
    }
    let leaderArmyCount=[]
    for(let leader in armyObject){
        let currentArray=[]
        currentArray.push(leader)
        let sum=0
        for(let currentSum of Object.values(armyObject[leader])){
            sum+=currentSum
        }
        currentArray.push(sum)
        leaderArmyCount.push(currentArray)
    }
    let sortLeaders=leaderArmyCount.sort((a,b)=>b[1]-a[1])
    for(let [name, count]of sortLeaders){
        console.log(`${name}: ${count}`);
        let leaderArmies=Object.entries(armyObject[name]).sort((a,b)=>b[1]-a[1])
        leaderArmies.forEach(el=> console.log(`>>> ${el[0]} - ${el[1]}`))
    }
    

}

solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])