function lastKelements(n,k){
    let arr=[1]
    for( let i=1; i<n; i++){
        let lastEl=arr.slice(-k)
        let sum=0
        for(let el of lastEl){
            sum+=el
        }
        arr.push(sum)
    }

    console.log(arr.join(" "));
}

lastKelements (6, 3)
