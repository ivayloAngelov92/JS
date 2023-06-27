function solve (arr){
    let catalogue={}
    arr.forEach((line)=>{
        let [product,price]= line.split(' : '); price=+price
        catalogue[product]=price
      })
      let sorted=Object.keys(catalogue).sort((a,b)=>a.localeCompare(b))
      let firstLetter=''
      for(let prod of sorted){
        if(prod[0]!==firstLetter){
            console.log(prod[0]);
            firstLetter=prod[0]
        }
        console.log(`  ${prod}: ${catalogue[prod]}`);
      }
}

solve (['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])