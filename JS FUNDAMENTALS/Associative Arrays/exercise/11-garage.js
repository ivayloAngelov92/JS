function solve(input) {
    let garages = {}

    for(let el of input){
        let cage=Number(el.split(' - ')[0])
        let carDetails=el.split(' - ')[1].split(', ')
        if(!garages[cage]){
            garages[cage]=[]
        }
        let current=[]
        for(let car of carDetails){
            let line=car.replace(': ', ' - ')
            current.push(line)
        }
        garages[cage].push(current)

    }
    for( let[garage, cage] of Object.entries(garages)){
        console.log(`Garage № ${garage}`);
        for(let car of cage){
            console.log(`--- ${car.join(', ')}`);
        }
    }
}

solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])