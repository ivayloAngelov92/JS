function solve (arr){
    let inputArr=arr
    let averageSalary=0
    let totalSalary=0
    let output={}
    
    for(let inputelement of inputArr){
       let resturantinfo=inputelement.split(' - ')
       let restaurantName=resturantinfo.shift()
       let workersData=resturantinfo[0].split(', ')
       for (let worker of workersData) {
        let [name, salary] = worker.split(" ");
        if (!output[restaurantName]) {
           output[restaurantName] = {};
        }
        
           output[restaurantName][name] = Number(salary);
        
     }
  }
  let entries = Object.entries(output);

  for (let entry of entries) {
     let key = entry[0];
     let values = Object.entries(entry[1]);

     for (let [name, salary] of values) {
        totalSalary += salary;
     }

     averageSalary = totalSalary / values.length;

     if (averageSalary > currentAverageSalary) {
        currentAverageSalary = averageSalary;
        bestRestaurant = key;
        totalSalary = 0;
     }
  }

  let print = "";
  let result = Object.entries(output[bestRestaurant]).sort(
     (a, b) => b[1] - a[1]
  );
  result.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));

  document.querySelector(
     "#bestRestaurant p"
  ).textContent = `Name: ${bestRestaurant} Average Salary: ${currentAverageSalary.toFixed(
     2
  )} Best Salary: ${result[0][1].toFixed(2)}`;
  document.querySelector("#workers p").textContent = print;
}


solve (["PizzaHut - Peter 500, George 300, Mark 800",

"TheLake - Bob 1300, Joe 780, Jane 660"])