function addItem() {
    let text = document.getElementById('newItemText').value
    let li = document.createElement('li')
    let deleteBn = document.createElement("a")
    let list = document.getElementById('items')
    li.textContent = text
    deleteBn.href = "#"
    deleteBn.textContent = '[Delete]'
    deleteBn.addEventListener('click', deleteItem)

    li.appendChild(deleteBn)


    list.appendChild(li)
    function deleteItem() {
        li.remove
    }
}