function solve(input) {
    let line = input.split(' ').map(w=> w.toLowerCase())
    let materials = {
        fragments:0,
        motes:0,
        shards:0
    }
    let junkItems={}
    for (let i = 0; i < line.length; i += 2) {
        if(line[i+1]=='motes'||line[i+1]=='shards'||line[i+1]=='fragments'){
            materials[line[i + 1]] += Number(line[i])
        }else{
            if (!junkItems[line[i + 1]]) {
                junkItems[line[i + 1]] = 0
            }
            junkItems[line[i + 1]] += Number(line[i])
        };

        if (materials['shards'] >= 250) {
            materials['shards'] -= 250
            console.log(`Shadowmourne obtained!`); break
        }
        if (materials['motes'] >= 250) {
            materials['motes'] -= 250
            console.log(`Dragonwrath obtained!`); break
        }
        if (materials['fragments'] >= 250) {
            materials['fragments'] -= 250
            console.log(`Valanyr obtained!`); break
        }
    }
    let sortedMaterials=Object.entries(materials).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))
    let sortedJunk=Object.entries(junkItems).sort((a,b)=>a[0].localeCompare(b[0]))
    for(let [mat, quantity] of sortedMaterials){
        console.log(`${mat}: ${quantity}`);
    }
    for(let [material,quantity]of sortedJunk){
        console.log(`${material}: ${quantity}`);
    }
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')