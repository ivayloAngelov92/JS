function addItem() {
    let value= document.getElementById('newItemText').value
    let item= document.createElement('li')
    item.textContent=value

    const deleteButton = document.createElement('a')
    deleteButton.href="#"
    deleteButton.textContent= "[Delete]"
    deleteButton.addEventListener('click', deleteFn)

    function deleteFn(e){
        e.target.parentNode.remove()
    }
    item.appendChild(deleteButton)

    document.getElementById('items').appendChild(item)
    document.getElementById('newItemText').value=''
}