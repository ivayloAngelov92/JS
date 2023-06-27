function generateReport() {

    let outputElement=document.querySelector("#output")
    let result=[]
    let checks=Array.from(document.getElementsByTagName("input"))
    let tableRows=Array.from(document.getElementsByTagName('tr'))

    tableRows.forEach(row=>{
        let current={}
        Array.from(row.querySelectorAll('td')).forEach((x,i)=>{
            if(checks[i].checked){
                current[checks[i].name]=x.textContent
            }
        })
        result.push(current)
    })
    outputElement.value=JSON.stringify(result)
}