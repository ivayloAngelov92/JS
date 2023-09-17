function solve(...inputs) {
    let res=0
    inputs.forEach(x=>{
        x>res? res=x: null;
    })
    console.log(`The largest number is ${res}.`); 
}
solve (5, -3, 16)