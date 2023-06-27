function solve(input) {
    let armies = {}
    for (let line of input) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0]
            armies[leader] = {}
        } else if (line.includes(': ')) {
            let [leader, armyInfo] = line.split(': ')
            let [armName, count] = armyInfo.split(', ')
            if (armies[leader]) {
                armies[leader][armName] = Number(count)
            }
        }else if(line.includes('defeated')){
            let leader = line.split(' defeated')[0]
            delete armies[leader]
        }else if (line.includes(' + ')){
            let [armyName,count]=line.split(' + ')
            let leaders=Object.keys(armies)
            for(lead of leaders){
                if(armies[lead][armyName]){
                    armies[lead][armyName]+=Number(count)
                }
            }
        }
    }
    let leadersArmies=[]
    for(let leader in armies){
        currentSum=[]
        currentSum.push(leader)
        let sum=0
        for(let army of Object.values(armies[leader])){
            sum+=Number(army)
        }
        currentSum.push(sum)
        leadersArmies.push(currentSum)
    }
    let sorted= leadersArmies.sort((a,b)=>b[1]-a[1])
    for(let [name, count] of sorted){
        console.log(`${name}: ${count}`);
        let armySortPerLeadr=Object.entries(armies[name]).sort((a,b)=> b[1]-a[1])
        for(let [army, count]of armySortPerLeadr){
            console.log(`>>> ${army} - ${count}`);
        }
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