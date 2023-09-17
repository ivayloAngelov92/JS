window.addEventListener('load', solve);

function solve() {
    let inputs={
        genre:document.getElementById('genre'),
        name:document.getElementById('name'),
        author:document.getElementById('author'),
        date:document.getElementById('date'),
    }
    let containers={
        collection: document.getElementsByClassName('all-hits-container')[0],
        saved: document.getElementsByClassName('saved-container')[0],
        likes: document.getElementsByClassName('likes')[0],
    }
    let addBtn= document.getElementById('add-btn');
    addBtn.addEventListener('click', addFn)
    function addFn(e) {
        e.preventDefault();
        if(Object.values(inputs).some(input=>input.value=='')){return}
        let div= createElement('div',null,containers.collection,['hits-info']);
        let img=document.createElement('img')
        img.src='./static/img/img.png';
        div.appendChild(img)
        createElement('h2',`Genre: ${inputs.genre.value}`,div)
        createElement('h2',`Name: ${inputs.name.value}`,div)
        createElement('h2',`Author: ${inputs.author.value}`,div)
        createElement('h3',`Date: ${inputs.date.value}`,div)
        createElement('button', 'Save song',div,['save-btn']).addEventListener('click',saveFn)
        createElement('button', 'Like song',div,['like-btn']).addEventListener('click',likeFn)
        createElement('button', 'Delete',div,['delete-btn']).addEventListener('click',deleteFn)
   
        clearAllInputs()
    }

    function saveFn(e){
        let div= e.currentTarget.parentNode
        div.remove()
        containers.saved.appendChild(div)
        div.getElementsByTagName('button')[0].remove()
        div.getElementsByTagName('button')[0].remove()

        console.log(div);
    }
    function likeFn(e){
       let currentLike= Number(containers.likes.getElementsByTagName('p')[0].textContent.split('Total Likes: ')[1])
       currentLike++
       let target= containers.likes.getElementsByTagName('p')[0]
       target.textContent=`Total Likes: ${currentLike}`
       e.target.disabled=true
    }
    function deleteFn(e){
        let div= e.currentTarget.parentNode
        div.remove()
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