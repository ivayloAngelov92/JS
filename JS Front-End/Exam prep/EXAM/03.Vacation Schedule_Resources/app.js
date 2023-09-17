let loadBtn= document.getElementById('load-vacations')
let addBtn= document.getElementById('add-vacation');
let editBtn= document.getElementById('edit-vacation');
let listContainer= document.getElementById('list')

let editId=''
let inputs={
    name:document.getElementById('name'),
    days:document.getElementById('num-days'),
    date:document.getElementById('from-date'),
}

loadBtn.addEventListener('click', loadFn)
addBtn.addEventListener('click', addFn)
editBtn.addEventListener('click', editFn)
// let tasks={}
async function loadFn(){
    let response= await fetch('http://localhost:3030/jsonstore/tasks/')
    let data = await response.json()
    console.log(data);
    listContainer.innerHTML=''
    Object.values(data).forEach(input=>{
        let div=createElement('div',null,listContainer,['container'],input._id)
        createElement('h2',input.name,div)
        createElement('h3',input.date,div)
        createElement('h3',input.days,div)
        createElement('button','Change',div,['change-btn']).addEventListener('click',changeFn)
        createElement('button','Done',div,['done-btn']).addEventListener('click',doneFn)
    //    tasks[input._id]={
    //     name:input.name,
    //     date:input.date,
    //     days:input.days,
    //    }
    })
}
async function addFn(e){
    if (e){e.preventDefault()}
    if(Object.values(inputs).some(input=>input.value=='')){return}
    let data={
        name:inputs.name.value,
        days:inputs.days.value,
        date:inputs.date.value,
    }
    await fetch('http://localhost:3030/jsonstore/tasks/',{
        method: 'POST',
        body: JSON.stringify(data)
    })
    clearAllInputs()
    loadFn()
}
function changeFn(e){
    let button= e.currentTarget
    let div=e.currentTarget.parentNode
    // let id=div.id
    inputs.name.value=div.getElementsByTagName('h2')[0].textContent
    inputs.date.value=div.getElementsByTagName('h3')[0].textContent
    inputs.days.value=div.getElementsByTagName('h3')[1].textContent
    div.remove()
    editBtn.disabled=false
    addBtn.disabled=true
    editId=div.id
}
async function editFn(e){
    if (e){e.preventDefault()}
    if(Object.values(inputs).some(input=>input.value=='')){return}
    let data={
        name:inputs.name.value,
        days:inputs.days.value,
        date:inputs.date.value,
    }
    await fetch(`http://localhost:3030/jsonstore/tasks/${editId}`,{
        method: 'PUT',
        body: JSON.stringify(data)
    })
    loadFn()
    clearAllInputs()
    editBtn.disabled=true
    addBtn.disabled=false
}
async function doneFn(e){
    let id=e.target.parentNode.id
    await fetch(`http://localhost:3030/jsonstore/tasks/${id}`,{
        method:'DELETE',
    })
    loadFn()
}
function createElement(type, content, parentNode, classes, id, useInnerHtml) {
    const element = document.createElement(type);

    if (content && useInnerHtml) {
        element.innerHTML = content;
    } else {
        if (content && type !== 'input') {
            element.textContent = content;
        }
      
        if (content && type === 'input') {
          element.value = content;
        }
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute('id', id);
    }

    if (parentNode) {
      parentNode.appendChild(element);
    }
  
    return element;
}
function clearAllInputs() {
    Object.values(inputs)
        .forEach((input) => {
            input.value = '';
        })
}
