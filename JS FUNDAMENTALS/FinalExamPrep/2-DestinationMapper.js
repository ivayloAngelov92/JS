function solve (input){
    let pattern=/([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/gm
    let match=pattern.exec(input)
    let  points=0
    let destinations=[]
    while(match!==null){
        destinations.push(match.groups.name)
        points+=match.groups.name.length
        match=pattern.exec(input)
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

solve ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")