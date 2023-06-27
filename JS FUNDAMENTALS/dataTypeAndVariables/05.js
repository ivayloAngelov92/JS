function solve(a){
    a=a.toString()
    let sum=0
    let isAmazing=false
    for(let i=0; i<a.length; i++){
        sum+=Number(a[i])
    }

    let sumText=sum.toString()
    for(let i=0; i<sumText.length; i++){
        let currentDigit= sumText[i]
        if(currentDigit=='9')
        isAmazing=true
        break
    }
    console.log(`${a} Amazing? ${isAmazing ? 'True' : "False"}`);
    // let result= sum.toString().includes('9')
    // console.log(result ? 
    //     `${a} Amazing? True` :
    //     `${a} Amazing? False`);
}

solve (999)