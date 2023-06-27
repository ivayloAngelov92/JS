function solve (input){
    let patter=/@#+(?<password>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm 
    let n=Number(input[0])
    for(let i=1; i<=n;i++){
        let match=input[i].match(patter)
        if(match===null){
            console.log('Invalid barcode'); continue
        }
        if(match[0]===input[i]){
            let code=''
            for(let x of input[i]){
                if(Number(x)==x){
                    code+=x
                }
            }
            if(code!==''){
                console.log(`Product group: ${code}`);
            }else{console.log('Product group: 00');}
        }
    }
}

solve (["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

