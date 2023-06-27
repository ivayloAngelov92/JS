window.addEventListener('load', solve);

function solve() {
    let inputs = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }
    let totalLikes = document.querySelector('.likes p')
    let likes = 0
    let savedSongs = document.querySelector('.saved-container')
    let collectionOfSongs = document.querySelector('.all-hits-container')
    document.getElementById('add-btn').addEventListener('click', addFn)

    function addFn(e) {
        e.preventDefault()
        let genre = inputs.genre.value
        let name = inputs.name.value
        let author = inputs.author.value
        let date = inputs.date.value

        if (genre === '' || name === '' || author === '' || date === '') { return }

        let div = document.createElement('div')
        div.classList.add("hits-info")
        div.innerHTML = `
        <img src="./static/img/img.png">
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`

        collectionOfSongs.appendChild(div)

        inputs.genre.value = ''
        inputs.name.value = ''
        inputs.author.value = ''
        inputs.date.value = ''

        let likeBtn = div.querySelector('.like-btn')
        likeBtn.addEventListener('click', likeFn)

        let saveBtn = div.querySelector('.save-btn')
        saveBtn.addEventListener('click', saveFn)

        let deleteBtn = div.querySelector('.delete-btn')
        deleteBtn.addEventListener('click', deleteFn)

        function likeFn() {

            likes++
            totalLikes.textContent = `Total Likes: ${likes}`
            likeBtn.disabled = true

        }
        function saveFn() {
            let saveDiv = document.createElement('div')
            saveDiv.classList.add('hits-info')
            saveDiv.innerHTML = `
            <img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="delete-btn">Delete</button>`
            savedSongs.appendChild(saveDiv)
            div.remove()

            let savedDeleteBtn = saveDiv.querySelector('.delete-btn')
            savedDeleteBtn.addEventListener('click', saveDeleteFn)
            function saveDeleteFn() {
                saveDiv.remove()
            }
        }
        function deleteFn() {
            div.remove()
        }

    }
}