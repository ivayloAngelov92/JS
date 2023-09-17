window.addEventListener("load", solve);

function solve() {
  let inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  }


  let preview = document.getElementById('preview-list')

  let publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener("click", publishFn)
  function publishFn(e) {
    let firstName = inputs.firstName.value
    let lastName = inputs.lastName.value
    let age = inputs.age.value
    let title = inputs.title.value
    let genre = inputs.genre.value
    let story = inputs.story.value
    if (Object.values(inputs).some(input => input.value === '')) { return }
    let li = createElement('li', null, preview, ['story-info'])
    let article = createElement('article', null, li)
    createElement('h4', `Name: ${firstName} ${lastName}`, article)
    createElement('p', `Age: ${age}`, article)
    createElement('p', `Title: ${title}`, article)
    createElement('p', `Genre: ${genre}`, article)
    createElement('p', story, article)
    createElement('button', 'Save Story', li, ['save-btn']).addEventListener('click', saveFn)
    createElement('button', 'Edit Story', li, ['edit-btn']).addEventListener('click', editFn)
    createElement('button', 'Delete Story', li, ['delete-btn']).addEventListener('click', deleteFn)
    clearAllInputs()
    publishBtn.disabled = true
    function saveFn(e) { 
       let div= document.getElementById('main')
       div.innerHTML=''
       createElement('h1','Your scary story is saved!',div)
    }
    function editFn(e) {
      inputs.firstName.value = firstName
      inputs.lastName.value = lastName
      inputs.age.value = age
      inputs.title.value = title
      inputs.genre.value = genre
      inputs.story.value = story
      li.remove()
      publishBtn.disabled = false
    }
    function deleteFn(e) {
      li.remove()
      publishBtn.disabled = false
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

  function clearAllInputs() {
    Object.values(inputs)
      .forEach((input) => {
        input.value = '';
      })
  }
}
