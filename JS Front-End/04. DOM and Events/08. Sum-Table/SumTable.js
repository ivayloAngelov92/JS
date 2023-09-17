function sumTable() {
    let prices= Array.from(document.querySelectorAll('td:nth-child(2)')) 
    let sum= prices.pop()
    let total= prices.reduce((acc, curr)=>{
        return acc + Number(curr.textContent)
    },0)

    sum.textContent=total
}