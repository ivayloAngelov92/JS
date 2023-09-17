// TODO:
function attachEvents() {
  let inputs = {
    title: document.getElementById('title'),
    description: document.getElementById('description'),
  };
  let buttons = {
    load: document.getElementById('load-board-btn'),
    add: document.getElementById('create-task-btn'),
  };
  let containers = {
    "ToDo": document.querySelector('#todo-section .task-list'),
    'In Progress': document.querySelector('#in-progress-section .task-list'),
    'Code Review': document.querySelector('#code-review-section .task-list'),
    "Done": document.querySelector('#done-section .task-list'),
  };
  let buttonText = {
    "ToDo": 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    "Done": 'Close',
  };
  let moveContainers={
    'todo-section':'in-progress-section',
    'in-progress-section': 'code-review-section',
    'code-review-section': 'done-section'
  }
  buttons.load.addEventListener('click', loadFn);
  buttons.add.addEventListener('click', addFn);

  let tasks={
    
  }
  async function loadFn() {

    let response = await fetch('http://localhost:3030/jsonstore/tasks/');
    let data = await response.json();
    Object.values(containers).forEach(section=> section.textContent='')
    console.log(data);
    Object.values(data).forEach((task) => {
      let list = createElement('li', null, containers[task.status], ['task']);
      createElement('h3', task.title, list);
      createElement('p', task.description, list);
      let button = createElement('button', buttonText[task.status], list, [], task._id);
      button.addEventListener('click', moveToNext);
    });
  }


  async function addFn() {
    if(Object.values(inputs).some(input=> input.value==='')){return}
    let task={
        title: inputs.title.value,
        description: inputs.description.value,
        status: "ToDo"
    }
    
    await fetch('http://localhost:3030/jsonstore/tasks/',{
        method: 'POST',
        body: JSON.stringify(task),
    })
    loadFn()
    inputs.title.value = ''
    inputs.description.value = ''
  }
 async function moveToNext(e) {
    let task= tasks[e.currentTarget.getAttribute('id')]
    await fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`,{
      method:'PATCH',
      body: JSON.stringify({
        ...task,
        status
      })
    })
    console.log(taskId);
  }
  function createElement(type, textContent, parent, classes, id) {
    const element = document.createElement(type);
    if (textContent) {
      element.textContent = textContent;
    }
    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }
    if (id) {
      element.setAttribute('id', id);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
attachEvents();
