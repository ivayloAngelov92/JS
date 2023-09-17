
let inputs = {
    title: document.getElementById('course-name'),
    type: document.getElementById('course-type'),
    description: document.getElementById('description'),
    name: document.getElementById('teacher-name'),
}
let buttons = {
    add: document.getElementById('add-course'),
    edit: document.getElementById('edit-course'),
    load: document.getElementById('load-course'),
}
let courseTypes=['Long', 'Medium', 'Short']

let container = document.getElementById('list')
let containerId=''

buttons.add.addEventListener('click', addFn)
buttons.load.addEventListener('click', loadCourses)
buttons.edit.addEventListener('click', courseEdit)



async function loadCourses() {
    try {
        clearAllSections()
        let response = await fetch('http://localhost:3030/jsonstore/tasks/')
        let data = await response.json()
        Object.values(data).forEach(input => {
            let div = createElement('div', null, container, ['container'],input._id)
            createElement('h2', input.title, div)
            createElement('h3', input.teacher, div)
            createElement('h3', input.type, div)
            createElement('h4', input.description, div)
            let editBtn = createElement('button', 'Edit Course', div, ['edit-btn'])
            let finishBtn = createElement('button', 'Finish Course', div, ['finish-btn'])

            editBtn.addEventListener('click', editFn)
            finishBtn.addEventListener('click', finishFn)
        })

        console.log(Object.values(data));
    } catch (err) {
        let message = err.message
        alert(message)
    }
}
async function addFn(e) {
    console.log("working");
    e.preventDefault()
    if (Object.values(inputs).some(input => input.value == '')) { return }
    if (!courseTypes.includes(inputs.type.value)) {
        alert('Type must be Long or Medium or Short')
        return }
    let data = {
        title: inputs.title.value,
        type: inputs.type.value,
        description: inputs.description.value,
        teacher: inputs.name.value
    }
    await fetch('http://localhost:3030/jsonstore/tasks/', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    loadCourses()
    clearAllInputs()
}
function editFn(e) {
    let course= e.currentTarget.parentNode
    containerId=course.getAttribute('id')
    inputs.title.value=course.getElementsByTagName('h2')[0].textContent
    inputs.name.value=course.getElementsByTagName('h3')[0].textContent
    inputs.type.value=course.getElementsByTagName('h3')[1].textContent
    inputs.description.value=course.getElementsByTagName('h4')[0].textContent
    course.remove()
    buttons.edit.disabled=false
    buttons.add.disabled=true
 }
async function courseEdit(e){
    e.preventDefault()
    if (Object.values(inputs).some(input => input.value == '')) { return }
    if (!courseTypes.includes(inputs.type.value)) {
        alert('Type must be Long or Medium or Short')
        return }
    let data = {
        title: inputs.title.value,
        type: inputs.type.value,
        description: inputs.description.value,
        teacher: inputs.name.value
    }
    await fetch(`http://localhost:3030/jsonstore/tasks/${containerId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
    buttons.edit.disabled=true
    buttons.add.disabled=false
    loadCourses()
    clearAllInputs()
 }
async function finishFn(e) { 
    let course= e.currentTarget.parentNode
    containerId=course.getAttribute('id')
    await fetch (`http://localhost:3030/jsonstore/tasks/${containerId}`,{
        method: 'DELETE',
    })
    loadCourses()
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
function clearAllSections() {
    container.innerHTML=''
}


