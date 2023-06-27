function attachEvents() {
    document.getElementById('refresh').addEventListener('click', displayComments)
    document.getElementById('submit').addEventListener('click', addComment)
}
let url = "http://localhost:3030/jsonstore/messenger"

async function addComment() {
    let authorName = document.getElementsByName('author')[0]
    let content = document.getElementsByName('content')[0]

    if (!authorName.value || !content.value) return
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                author: authorName.value.trim(),
                content: content.value.trim()
            })
        })
        if (!response.ok) throw new Error('Error')
    } catch (err) { alert(err.message) }
}

async function displayComments(){
    try{
        let response=await fetch(url)
        if(!response.ok) throw new Error('Error')
        let data=await response.json()
        let comments=[]
        Object.values(data).forEach((user)=>{
            comments.push(`${user.author}: ${user.content}`)
        })
        document.getElementById("messages").textContent=comments.join('\n')
    }catch(err){alert(err.message)}
}
attachEvents();