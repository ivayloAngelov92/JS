function solve(letter){
    let check=letter.charCodeAt(0)
    if (check<=90&&check>=65){
        console.log(`upper-case`);
    }else{
        console.log(`lower-case`);
    }
}

solve ('L')