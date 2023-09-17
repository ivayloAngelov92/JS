function solve (string){
    string=string.toLowerCase()
    let words={}
    let array= string.split(" ")
    array.forEach(word=>{
        if(!words[word]){
            words[word]=0
        }
        words[word]+=1
    })
    let result= []
    for(let word in words) {
        if(words[word]%2==1){
            result.push(word)
        }
    }
    console.log(result.join(' '));
}   

solve ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')