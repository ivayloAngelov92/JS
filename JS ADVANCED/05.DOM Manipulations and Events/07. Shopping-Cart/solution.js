function solve() {

   let textArea = document.querySelector(' textarea');   // Намирамето полето за вписване на текст 
   let totalPrice = 0;                                               // Създаваме променлива за изчисляване на общата цена 
   let listOfProducts = [];                                          // Създаваме масив, в който да пазим купените продукти 
   let addBtns = document.getElementsByClassName('add-product');     // Намираме всички бутони "add"
   let checkOut = document.querySelector('body > div > button');     // Намираме бутона CheckOut 

   for (let i = 0; i < addBtns.length; i++) {                        // Минаваме по всеки един бутон 
      addBtns[i].addEventListener('click', function one() {          // Добавяме слушател към бутона 
           let name = document.getElementsByClassName("product-title")[i].textContent;
           let price = document.getElementsByClassName('product-line-price')[i].textContent;
           if (!listOfProducts.includes(name)) {                     // Ако няма в масива, такъв продукт 
               listOfProducts.push(name);                            // го добавяме 
           }
           let text = `Added ${name} for ${price} to the cart.\n`;   // текста ни е този 
           totalPrice += Number(price);                              // добавяме цената на всеки купен продукт 
           textArea.value += text;                                   // към полето добавяме текста 
       });
   }
   

   checkOut.addEventListener('click', function final() {             // Слагаме му слушател 
       let finalText = `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;   // това ни е сборния текст 
       textArea.value += finalText;                                  // Добавяме го към полето с събраните текст до момента 
       disableButtons();                                             // Викаме функцията 
   });

   function disableButtons() {                                       // Създаваме функция 
      let buttons = Array.from(document.querySelectorAll('button')); // Намираме всички бутони на страницата 
      buttons.forEach(button => button.disabled = true);             // Изключваме всички бутони, за да не са активни повече 
   }
}