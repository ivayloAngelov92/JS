function attachEvents() {
  document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
  document.getElementById('btnViewPost').addEventListener('click', viewPost);

  let posts;
  async function loadPosts() {
    try {
      const url = 'http://localhost:3030/jsonstore/blog/posts';
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      const data = await res.json();
      posts = data;
      console.log(posts);
      document.getElementById('posts').innerHTML = '';

      Object.values(data).forEach((post) => {
        const optionElement = document.createElement('option');
        optionElement.value = post.id;
        optionElement.textContent = post.title;
        document.getElementById('posts').appendChild(optionElement);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function viewPost() {
    try {
      const selectElement = document.getElementById('posts').value;
      const url = 'http://localhost:3030/jsonstore/blog/comments';
      const res = await fetch(url);
      if (!res.ok) throw new Error();

      const data = await res.json();
      console.log(data);
      const comments = Object.values(data).filter(
        (el) => el.postId === selectElement
      );
      document.getElementById('post-title').textContent=''
      document.getElementById('post-body').innerHTML=''
      document.getElementById('post-comments').innerHTML = ''
      document.getElementById('post-title').textContent=`${posts[selectElement].title}`
      document.getElementById('post-body').innerHTML=posts[selectElement].body
      
        console.log(comments);
      comments.forEach(comment =>{
        let li= document.createElement('li');
        li.setAttribute('id',`${comment.id}`);
        li.textContent= comment.text
        document.getElementById('post-comments').appendChild(li);
      })

    } catch (e) {
      console.log(e);
    }
  }
}

attachEvents();
