let button = document.getElementById('load')
button.addEventListener('click', function loadRepos() {
   let url = "https://api.github.com/users/testnakov/repos"

   let httpReq = new XMLHttpRequest()
   httpReq.addEventListener('readystatechange', function displayRepos() {
      if (httpReq.readyState === 4 && httpReq.status === 200) {
         document.getElementById('res').textContent = httpReq.responseText
      }
   })
   httpReq.open('GET', url)
   httpReq.send()
})




