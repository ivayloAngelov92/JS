function charactersInRang(a, b){
    let start=Math.min(a.charCodeAt(),b.charCodeAt())
    let end=Math.max(b.charCodeAt(),a.charCodeAt())
    let res=[]
    for(let i=start+1;i<end;i++){
        let singleChar= String.fromCharCode(i)
        res.push(singleChar)
    }
    console.log(res.join(' '));
}

charactersInRang('#',':')