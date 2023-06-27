function deleteByEmail() {
    let query=document.getElementsByName("email")[0].value 
    // let query=document.querySelector('input[name="email"]').value
    let rows=document.querySelectorAll("tbody tr")
    let result=document.getElementById("result")

    let rowsArray=Array.from(rows)
    let deleted=false
    for( let row of rowsArray){
        let col= row.children[1]
        if(col.textContent==query){
            row.remove()
            deleted=true
        }
    }
    result.textContent=deleted? "Deleted.": "Not found."
    
}