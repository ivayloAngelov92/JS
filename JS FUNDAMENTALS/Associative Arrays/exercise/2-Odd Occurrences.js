function solve (string){
    let result={}
    let words=string.split(' ').map(w=> w.toLowerCase())

    for(let word of words){
        if(!result[word]){
            result[word]=0
        }
        result[word]++
    }
    let end=''
    for(let word of Object.keys(result)){
        if(result[word]%2==1){
            end+=`${word} `
        }
    }
    console.log(end);
}

solve ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')