async function loadCommits() {
    let username= document.getElementById('username').value;
    let repo= document.getElementById('repo').value;
    if(!username|| !repo){throw new Error('Please enter a username')}
    let list= document.querySelector('ul')
    const result= await(await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)).json()

    result.forEach(({commit})=>{
        let li= document.createElement('li')
        li.textContent = commit.message
        list.appendChild(li)
    })
    // .then(res=>res.json())
    // .then(commits=>{
    //     commits.forEach(commit=>{
    //         let item= document.createElement('li');
    //         item.textContent= commit.message;
    //         list.appendChild(item);
    //     })
    // })
}