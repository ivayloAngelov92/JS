function sumTable() {
    let table=document.querySelectorAll("table tr")
    let total=0 
    for(let i=1; i<table.length; i++){
        let col= table[i].children
      let sum=col[col.length-1].textContent
      total+=Number(sum)
      } 
      document.getElementById("sum").textContent=total
}