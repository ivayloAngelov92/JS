window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name')
  let lastName = document.getElementById('last-name')
  let age = document.getElementById('age')
  let storyTitle = document.getElementById('story-title')
  let genre = document.getElementById('genre')
  let story = document.getElementById('story')

  let publishBtn = document.getElementById('form-btn')

  publishBtn.addEventListener('click', publishFn)


  function publishFn(event) {
    event.preventDefault()
    let preview = document.getElementById('preview-list')

    let fName = firstName.value
    let lName = lastName.value
    let ageAd = age.value
    let storyAd = storyTitle.value
    let genAd = genre.value
    let yourStory = story.value
    if (fName === '' || lName === '' || ageAd === '' || storyAd == '' || genAd == '' || yourStory == '') { return }

    let li = document.createElement('li')
    li.classList.add("story-info")
    let article = document.createElement('article')
    let h4 = document.createElement('h4')
    h4.textContent = `Name: ${fName} ${lName}`
    let p1 = document.createElement("p")
    p1.textContent = `Age: ${ageAd}`
    let p2 = document.createElement("p")
    p2.textContent = `Title: ${storyAd}`
    let p3 = document.createElement("p")
    p3.textContent = `Genre: ${genAd}`
    let p4 = document.createElement("p")
    p4.textContent = `${yourStory}`

    article.appendChild(h4)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)
    article.appendChild(p4)
    li.appendChild(article)


    let saveBtn = document.createElement('button')
    saveBtn.classList.add('save-btn')
    saveBtn.textContent = 'Save Story'
    li.appendChild(saveBtn)

    let editBtn = document.createElement("button")
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit Story'
    li.appendChild(editBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete Story'
    li.appendChild(deleteBtn)

    preview.appendChild(li)

    saveBtn.addEventListener('click', saveFn)
    editBtn.addEventListener('click', editFn)
    deleteBtn.addEventListener('click', deleteFn)

    firstName.value = ''
    lastName.value = ''
    age.value = ''
    storyTitle.value = ''
    genre.value = ''
    story.value = ''


    publishBtn.disabled = true
    function editFn() {
      firstName.value = fName
      lastName.value = lName
      age.value = ageAd
      storyTitle.value = storyAd
      genre.value = genAd
      story.value = yourStory
      li.remove()
      publishBtn.disabled = false
    }

    function saveFn() {
      let div = document.getElementById("main")
      div.innerHTML = ''
      let h1 = document.createElement('h1')
      h1.textContent = "Your scary story is saved!"
      div.appendChild(h1)
    }

    function deleteFn() {
      li.remove()
      publishBtn.disabled = false
    }
  }
}
