 async function loadRepos() {
   const repos=await fetch('https://api.github.com/users/testnakov/repos')
   try {
      let data= repos.json()
   } catch (error) {
      
   }
   console.log(data.id);
}