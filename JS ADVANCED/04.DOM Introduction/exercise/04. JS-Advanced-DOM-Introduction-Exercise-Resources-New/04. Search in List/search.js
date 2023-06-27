function search() {
   let itemList=Array.from(document.querySelectorAll("#towns li"))
   let result=document.querySelector("#result")
   let searchInput=document.querySelector("#searchText")
   let counter=0


   itemList.forEach(element=>{
      if(element.textContent.includes(searchInput.value)){
         element.style.fontWeight="bold"
         element.style.textDecoration="underline"
         counter++
      }else{
         element.style.fontWeight="normal"
         element.style.textDecoration="none"
      }
   })
   result.textContent=`${counter} matches found`
  

}
