function solve (dataAsJSON){
    let result=[]
    result.push('<table>')

    let data=JSON.parse(dataAsJSON)
    let props=Object.keys(data[0])
    result.push(`  <tr>${props.map(p=> `<th>${p}</th`).join('')}</tr`)
    
    for(let entry of data){
        result.push(`  <tr>${props.map(p=> `<td>${entry[p]}</td`).join('')}</tr`)
    }
    result.push('/<table>')
    return result.join('\n')
}

console.log(solve (`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`)); 