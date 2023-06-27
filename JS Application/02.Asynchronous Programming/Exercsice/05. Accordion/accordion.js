async function solution() {
    try{
        let response= await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        if(!response.ok){
            throw new Error()
        }
        let data= await response.json()
        let main=document.getElementById('main')
        data.forEach((article)=>{
            let div1=document.createElement('div');div1.classList.add('accordion'); main.appendChild(div1)
            let div2=document.createElement('div'); div2.classList.add('head'); div1.appendChild(div2)
            let span=document.createElement('span'); span.textContent=`${article.title}`; div2.appendChild(span)
            let button=document.createElement('button'); button.classList.add('button');
            button.id=`${article._id}`; button.textContent='More';
            button.addEventListener('click', moreFn); div2.appendChild(button)
            let div3=document.createElement('div'); div3.classList.add('extra'); div1.appendChild(div3)
            
        })
    }catch(error){
        console.log(error);
    }
}
async function moreFn(event){
    try {
        let currentTarget = event.currentTarget;                            // запазваме в променлива, кой article е натиснат бутона му 
        let url ="http://localhost:3030/jsonstore/advanced/articles/details/" + currentTarget.id; // Записваме си URL 
        let parent = currentTarget.parentNode.parentNode;                   // Качваме се 2 елемента по нагоре от натиснатия 
        let extraDiv = parent.getElementsByClassName("extra")[0];                   // Селектираме див екстра елемента 

        let response = await fetch(url);                                    // await url и получаваме респонса 

        if (response.ok === false) {                                        // Ако респонса не е ок
            throw new Error(`Error obtaining article details`);             // Хвърляме грешка 
        }

        let data = await response.json();                                   // await response.json() и получаваме data 

        extraDiv.innerHTML = `<p>${data.content}</p>`;                      // Добавяме към extradiv параграфа със съдържанието

        if (currentTarget.textContent === "More") {                         // Ако съдържанието на натиснатия е More 
            currentTarget.textContent = "Less";                             // Сменяме го на Less
            extraDiv.style.display = "block";                               // и го показваме 
        } else {                                                            // Ако съдържанието на натиснатия е Less
            currentTarget.textContent = "More";                             // Сменяме го на More
            extraDiv.style.display = "none";                                // и го скриваме 
        }
    } catch (error) {
        console.log(error);
    }
}
solution()