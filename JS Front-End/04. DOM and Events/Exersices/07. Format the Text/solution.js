function solve() {
  
  let text=document.getElementById('input').value
  let sentencesArr=text.split('.').filter((s)=>s.length!==0)
  let output=document.getElementById('output')


  while(sentencesArr.length>0){
    let textParagraph=sentencesArr.splice(0,3).join('. ')+'.'

    let p=document.createElement(`p`)
    p.textContent=textParagraph
    output.appendChild(p)
  }
}