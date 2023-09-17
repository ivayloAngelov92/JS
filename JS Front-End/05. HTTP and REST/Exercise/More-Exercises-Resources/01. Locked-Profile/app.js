let container= document.getElementById('main')

async function lockedProfile() {
    container.innerHTML=''
    let response= await fetch('http://localhost:3030/jsonstore/advanced/profiles')
    let data= await response.json()
    console.log(Object.values(data));
    let nUser=1
    Object.values(data).forEach(input=>{
      
        let div=createElement('div',null, container,['profile'])
        div.innerHTML=`
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${nUser}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${nUser}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${nUser}Username" value=${input.username} disabled readonly/>
        <div id=${input._id}>
          <hr>
          <label>Email:</label>
          <input type="email" name="user${nUser}Email" value=${input.email} disabled readonly/>
          <label>Age:</label>
          <input type="email" name= "user${nUser}Age" value=${input.age} disabled readonly/>
        </div>
        `
        let button= createElement('button', 'Show More', div); button.addEventListener('click', showMoreFn)
        let div2=document.getElementById(input._id)
        div2.style.display= 'none'
        nUser++
    })
    function showMoreFn(e){
      let currentUser = e.target.parentNode
      console.log(currentUser);
      let input= currentUser.getElementsByTagName('input')[1]
      if(input.checked){
        currentUser.getElementsByTagName('div')[0].style.display= 'inline-block'
        e.target.textContent='Hide it'
        e.target=e.target.addEventListener('click',hideFn)
      }
      
    }
    function hideFn (e){
      let button=e.target
      let currentUser = e.target.parentNode
      let input= currentUser.getElementsByTagName('input')[1]
      if(input.checked){
        button.textContent='Show more'
      button.addEventListener('click', showMoreFn)
      currentUser.getElementsByTagName('div')[0].style.display= 'none'
      }
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