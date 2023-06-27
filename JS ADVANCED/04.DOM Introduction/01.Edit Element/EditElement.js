function editElement(element, match, replacer) {

    let text = element.textContent;                 // Взимаме в променлива текста от елемента 
    let result = text.split(match).join(replacer);  // Разделяме текста по съвпадението и го събираме по риплейсъра 
    element.textContent = result;                     // Текста на елемента, вече е равен на резултата 
  }

  editElement("Hello, %insert name here%!","%insert name here%!", 'Document Object Model')

//   const text = element.textContent;               // Взимаме в променлива текста от елемента
//   const pattern = new RegExp(match, "g");         // Създаваме патърн, който да замени намери всички match
//   const result = text.replace(pattern, replacer); // Създаваме променлива result, която заменя всички намерени мачове с риплейсъра
//   element.textContent = result;                   // текста от елемента е равна вече на резултата
// }

// element.textContent = element.textContent.split(match).join(replacer);
// }