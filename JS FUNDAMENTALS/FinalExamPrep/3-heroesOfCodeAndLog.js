function solve (input){
    let n=Number(input.shift())
    let heroPary={}
    for(let i=0;i<n;i++){
        let [heroName,HP,MP]=input.shift().split(' ')
        HP=Number(HP);MP=Number(MP)
        heroPary[heroName]={HP,MP}
    }
    while(input[0]!=='End'){
        let line=input.shift().split(' - ')
        let [command,heroName]=line
        if(command==='CastSpell'){
            let mpNeeded=Number(line[2])
            let spellName=line[3]
            if(heroPary[heroName]['MP']>=mpNeeded){
                heroPary[heroName]['MP']-=mpNeeded
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroPary[heroName].MP} MP!`);
            }else{
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        }else if(command==='TakeDamage'){
            let damage=Number(line[2])
            let attacker=line[3]
            heroPary[heroName].HP-=damage
            if(heroPary[heroName].HP>0){
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroPary[heroName].HP} HP left!`);
            }else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroPary[heroName]
            }
        }else if(command==='Recharge'){
            let amount=Number(line[2])
            if(heroPary[heroName].MP+amount>200){
                amount=200-heroPary[heroName].MP
            }
            heroPary[heroName].MP+=amount
            console.log(`${heroName} recharged for ${amount} MP!`);
        }else if(command==="Heal"){
            let amount=Number(line[2])
            if(heroPary[heroName].HP+amount>100){
                amount=100-heroPary[heroName].HP
            }
            heroPary[heroName].HP+=amount
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }
    for(let [hero,stats] of Object.entries(heroPary)){
        console.log(hero);
        console.log(`  HP: ${stats.HP}`);
        console.log(`  MP: ${stats.MP}`);
    }
}

solve (['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    "TakeDamage - Kyrre - 66 - Orc",
    'CastSpell - Kyrre - 15 - ViewEarth',
    "End"
    ])