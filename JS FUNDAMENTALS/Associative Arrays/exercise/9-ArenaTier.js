function solve(input){
    let gladiators={}
    command=input.shift()
    while(command!=="Ave Cesar"){
        if(command.includes(' vs ')){
            let [one, two]= command.split(' vs ')
            let playerOne=gladiators[one]
            let playerTwo=gladiators[two]
            if(!playerOne||playerTwo){command=input.shift(); continue}
            let pOne=Object.entries(playerOne)
            let pTwo=Object.entries(playerTwo)
            let maxOne=0
            let maxTwo=0
            for(let [skill1,power1]of pOne){
                for(let[skill2,power2]of pTwo){
                    if(skill1===skill2){
                        maxOne+=power1
                        maxTwo+=power2
                    }
                }
            }
            if(maxOne>maxTwo){
                delete gladiators[one]
            }else if (maxOne<maxTwo){
                delete gladiators[two]
            }

        }
        let [gladiator, skill, power]=command.split(' -> ')
        power=Number(power)
        if(!gladiators[gladiator]){gladiators[gladiator]={}}

        if(!gladiators[gladiator][skill]){gladiators[gladiator][skill]=power}

        if(gladiators[gladiator][skill]>power){
            gladiators[gladiator][skill]=power
        }
        command=input.shift()
    }
    let totalSkillName = []; //create array for sort by total skill or name
    // compare by total skill
    for (let el of Object.keys(gladiators)) {
        let currentArray = []
        currentArray.push(el); //taking name
        let currentTotal = Array.from(Object.values(gladiators[el])).reduce((el, x) => el + x); // total Skill
        currentArray.push(currentTotal); // taking total
        totalSkillName.push(currentArray);  // add to array current warrior name/skill
    }

    // sort by skill then by name
    totalSkillName.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    for (let man of totalSkillName) {
        console.log(`${man[0]}: ${man[1]} skill`);

        // array for sorting skills
        let techSkill = [];
        Object.entries(gladiators[man[0]]).forEach(tech => techSkill.push(tech));

        //sort skills by value then key if values are equal                                
        techSkill.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        techSkill.forEach(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));   // print result
    }
}

solve ([

    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300', 
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
     'Ave Cesar'   
    ])