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

if(Object.values(inputs).some(input=>input.value=='')){return}
function clearAllSections() {
    Object.values(statusToContainerMap)
        .forEach((section) => {
            section.innerHTML = '';
        })
}

function clearAllInputs() {
    Object.values(inputs)
        .forEach((input) => {
            input.value = '';
        })
}