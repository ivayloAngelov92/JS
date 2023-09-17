window.addEventListener('load', solve);

function solve() {
    const tasks = {};
    const inputs = {
      title: document.getElementById('title'),
      description: document.getElementById('description'),
      label: document.getElementById('label'),
      points: document.getElementById('points'),
      assignee: document.getElementById('assignee'),
    };
    const icons = {
      "Feature": '&#8865',
      'Low Priority Bug': '&#9737',
      'High Priority Bug': '&#9888',
    };
    const lowerCases = {
      "Feature": 'feature',
      'Low Priority Bug': 'low-priority',
      'High Priority Bug': 'high-priority',
    };
    const buttons = {
      createTask: document.getElementById('create-task-btn'),
      deleteTask: document.getElementById('delete-task-btn'),
    };
  
    let taskSection = document.getElementById('tasks-section');
    let totalPoints = document.getElementById('total-sprint-points');
    let hidden = document.getElementById('task-id');
    buttons.createTask.addEventListener('click', createFn);
    buttons.deleteTask.addEventListener('click', deleteFn);
  
    function createFn(e) {
      if (Object.values(inputs).some((selector) => selector.value === '')) {
        return ;
      }
  
      const task = {
        id: `task-${Object.values(tasks).length + 1}`,
        title: inputs.title.value,
        description: inputs.description.value,
        label: inputs.label.value,
        points: Number(inputs.points.value),
        assignee: inputs.assignee.value,
      };
      tasks[task.id] = task;
  
      const article = createElement('article', null, ['task-card'], task.id);
      createElement(
        'div',
        `${task.label} ${icons[task.label]}`,
        ['task-card-label', lowerCases[task.label]],
        null,
        article,
        true
      );
      createElement('h3', task.title, ['task-card-title'], null, article);
      createElement(
        'p',
        task.description,
        ['task-card-description'],
        null,
        article
      );
      createElement(
        'div',
        `Estimated at ${task.points} pts`,
        ['task-card-points'],
        null,
        article
      );
      createElement(
        'div',
        `Assigned to: ${task.assignee}`,
        ['task-card-assignee'],
        null,
        article
      );
      const taskActions = createElement(
        'div',
        null,
        ['task-card-actions'],
        null,
        article
      );
      const button = createElement('button', 'Delete', [], null, taskActions);
      button.addEventListener('click', loadDeleteConfirm);
      taskSection.appendChild(article);
      calculatePoints()
      Object.values(inputs).forEach((selector) => (selector.value = ''));
    }
  
    function createElement(type, textContent, classes, id, parent, useInnerHTML) {
      const element = document.createElement(type);
      if (useInnerHTML && textContent) {
        element.innerHTML = textContent;
      } else if (textContent) {
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
    function loadDeleteConfirm(e) {
      let taskId = e.currentTarget.parentNode.parentNode.getAttribute('id');
      inputs.title.value = tasks[taskId].title;
      inputs.description.value = tasks[taskId].description;
      inputs.label.value = tasks[taskId].label;
      inputs.points.value = tasks[taskId].points;
      inputs.assignee.value = tasks[taskId].assignee;
  
      buttons.createTask.disabled = true;
      buttons.deleteTask.disabled = false;
      Object.values(inputs).forEach((input) => (input.disabled = true));
      hidden.value = taskId;
    }
    function deleteFn(e) {
      const taskId = hidden.value;
      let taskElement = document.getElementById(taskId);
      taskElement.remove();
      Object.values(inputs).forEach((input) => {
        input.value = '';
        input.disabled = false;
        buttons.createTask.disabled = false;
        buttons.deleteTask.disabled = true;
      });
      hidden.value = '';
      delete tasks[taskId];
      calculatePoints()
    }
    function calculatePoints(){
      let points = Object.values(tasks).reduce(
          (acc, curr) => acc + curr.points,
          0
        );
        totalPoints.textContent = `Total Points ${points}pts`;
    }
  }
