function addItem() {
    let menu= document.getElementById("menu");
    let text= document.getElementById("newItemText")
    let itemValue= document.getElementById("newItemValue")
    let option= document.createElement("option")
    option.textContent= text.value
    option.value= itemValue.value
    menu.appendChild(option)
    text.value=''
    itemValue.value=''
}