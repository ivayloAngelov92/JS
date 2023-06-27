function solve (input){
    let object={}
    for(let line of input){
        let [company, id]= line.split(" -> ")
        if(!object[company]){
            object[company]=[]
        }
        object[company].push(id)
    }
    let sorted=Object.entries(object).sort((a,b)=>a[0].localeCompare(b[0]))
    for(let line of sorted){
        console.log(line[0]);

        let allIds=line[1]
        let uniqueId=new Set(allIds)
        for(let id of uniqueId){
            console.log(`-- ${id}`);
        }
    }
    // let object={}
    // for(let line of input){
    //     let [company, id]= line.split(" -> ")
    //     if(!object[company]){
    //         object[company]=[]
    //     }
    //     if(!object[company].includes(id)){
    //         object[company].push(id)
    //     }
    // }
    // let sorted=Object.entries(object).sort((a,b)=>a[0].localeCompare(b[0]))
    // for(let line of sorted){
    //     let [com, ids]=line
    //     console.log(com);
    //     for(let id of ids){
    //         console.log(`-- ${id}`);
    //     }
    // }
}

solve ([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])