
function attachEvents() {
    let addBtn = document.getElementById('add-button')
    let loadBtn = document.getElementById('load-button')
    let container = document.getElementById('todo-list')
    let title = document.getElementById('title')
    loadBtn.addEventListener('click', loadFn)
    addBtn.addEventListener('click', addFn)

    async function loadFn(e) {
        if (e) { e.preventDefault() }
        let response = await fetch('http://localhost:3030/jsonstore/tasks/')
        let data = await response.json()
        container.innerHTML = ''
        Object.values(data).forEach(input => {
            let li = createElement('li', null, container, [], input._id)
            createElement('span', input.name, li)
            createElement('button', 'Remove', li).addEventListener('click', removeFn)
            createElement('button', 'Edit', li).addEventListener('click', editFn)
        })
        console.log(data);
    }
    async function addFn(e) {
        if (e) { e.preventDefault() }
        let data = {
            name: title.value
        }
        await fetch('http://localhost:3030/jsonstore/tasks/',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        title.value=''
        loadFn()
    }
    async function removeFn(e) {
        let listId= e.currentTarget.parentNode.getAttribute('id')
        await fetch(`http://localhost:3030/jsonstore/tasks/${listId}`,{
            method: 'DELETE'
        })
        loadFn()
    }
    function editFn(e) {
        let list= e.currentTarget.parentNode
        let listId= list.getAttribute('id')
        
        let span= list.getElementsByTagName('span')[0]
        span.remove()
        let input=createElement('input', span.textContent)
        list.prepend(input)
        let button= e.currentTarget
        button.remove()
        let submitBtn= createElement('button', 'Submit', list)
        submitBtn.addEventListener('click', submitFn)
       async function submitFn(e){
        if(e){e.preventDefault()}
        let currentInput=input.value
        console.log(listId);
            let data={
                name:currentInput
            }
            await fetch(`http://localhost:3030/jsonstore/tasks/${listId}`,{
                method: 'PATCH',
                body: JSON.stringify(data)
            })
            loadFn()
        }
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
    
    // if(Object.values(inputs).some(input=>input.value=='')){return}
   
}


attachEvents();
