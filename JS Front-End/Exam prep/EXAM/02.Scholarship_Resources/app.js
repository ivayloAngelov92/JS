window.addEventListener("load", solve);

function solve() {
  let inputs = {
    name: document.getElementById('student'),
    university: document.getElementById('university'),
    score: document.getElementById('score'),
  }
  let nextBtn = document.getElementById('next-btn')
  let previewList = document.getElementById('preview-list')
  let candidates = document.getElementById('candidates-list')

  nextBtn.addEventListener("click", nextFn);

  function nextFn(e) {
    if (e) {
      e.preventDefault();
    }

    if (Object.values(inputs).some(input => input.value == '')) { return }
    let li = createElement('li', null, previewList, ['application']);
    let article = createElement('article', null, li,)
    createElement('h4', inputs.name.value, article)
    createElement('p', `University: ${inputs.university.value}`, article)
    createElement('p', `Score: ${inputs.score.value}`, article)
    let editBtn = createElement('button', 'edit', li, ['action-btn', 'edit'])
    let applyBtn = createElement('button', 'apply', li, ['action-btn', 'apply'])
    editBtn.addEventListener('click', editFn)
    applyBtn.addEventListener('click', apllyFn)
    clearAllInputs()
    nextBtn.disabled = true
  }

  function editFn(e) {
    let li = e.target.parentNode
    li.remove()
    inputs.name.value = li.getElementsByTagName('h4')[0].textContent
    inputs.university.value = li.getElementsByTagName('p')[0].textContent.split('University: ')[1]
    inputs.score.value = li.getElementsByTagName('p')[1].textContent.split('Score: ')[1]
    nextBtn.disabled = false
  }
  function apllyFn(e) {
    let li= e.target.parentNode
    li.remove()
    candidates.appendChild(li)
    li.getElementsByTagName('button')[0].remove()
    li.getElementsByTagName('button')[0].remove()
    nextBtn.disabled = false
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
