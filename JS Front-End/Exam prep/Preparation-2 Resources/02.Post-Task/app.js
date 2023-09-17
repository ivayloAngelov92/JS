window.addEventListener("load", solve);

function solve() {
    let inputs={
        title: document.getElementById("task-title"),
        category: document.getElementById("task-category"),
        content:document.getElementById("task-content"),
    }
    let containers={
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list')
    }
    let button= document.getElementById('publish-btn')
    button.addEventListener('click',publishedFn)

    function publishedFn(e) {
        if(Object.values(inputs).some(input=>input.value=='')){return}
        let li= createElement('li', null, containers.review,['rpost'])
        let article= createElement('article', null, li)
        createElement('h4', inputs.title.value, article)
        createElement('p', `Category: ${inputs.category.value}`,article)
        createElement('p', `Content: ${inputs.content.value}`,article)
        let editBtn= createElement('button','Edit',li, ["action-btn", 'edit'])
        let postBtn= createElement('button','Post',li, ["action-btn", 'post'])
        editBtn.addEventListener('click',editFn)
        postBtn.addEventListener('click',postFn)
        clearAllInputs()
        
    }
    function editFn(e) {
        let currentPost= e.currentTarget.parentNode
        inputs.title.value = currentPost.getElementsByTagName('h4')[0].textContent
        inputs.category.value = currentPost.getElementsByTagName('p')[0].textContent.split('Category: ')[1]
        inputs.content.value = currentPost.getElementsByTagName('p')[1].textContent.split('Content: ')[1]
        currentPost.remove()
    }
    function postFn (e) {
        let currentPost= e.currentTarget.parentNode
        currentPost.remove()
        containers.published.appendChild(currentPost)
        currentPost.getElementsByTagName('button')[0].remove()
        currentPost.getElementsByTagName('button')[0].remove()
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
}