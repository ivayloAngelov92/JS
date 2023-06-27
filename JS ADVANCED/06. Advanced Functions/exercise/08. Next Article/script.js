function getArticleGenerator(articles) {
    let divContent = document.getElementById('content')
    return function showNext() {

        if (articles.length) {

            let articleElement = document.createElement('article')
            articleElement.textContent = articles.shift()
            divContent.appendChild(articleElement)
        }
    }
}
