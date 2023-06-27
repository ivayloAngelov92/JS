function extractText() {
    let list=document.getElementById('items')
    let items=Array.from(list.children)
    let result =items.map(li=> li.textContent).join('\n')
    let output=document.getElementById('result')
    output.value=result
}