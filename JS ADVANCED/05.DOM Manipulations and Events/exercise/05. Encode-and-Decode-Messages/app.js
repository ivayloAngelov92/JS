function encodeAndDecodeMessages() {

    let [textArea,decodeArea] = Array.from(document.querySelectorAll("textarea"));   // Взимаме полетата за съобщенията
    let [encodeBtn,decodeBtn] =Array.from(document.querySelectorAll("button")) ;       // Взимаме бутоните на полетата

    encodeBtn.addEventListener("click", encode);           // на първия бутон от страницата слагаме слушател за енкодиране
    decodeBtn.addEventListener("click", decode);           // на втория бутон от страницата слагаме слушател за декодиране

    function encode(event) {
        let encodedMessage = "";                            // Първоначално енкодираното съобщение е празно
        let input = textArea.value;                     // Взимаме въведената стойност в първото поле

        for (let index = 0; index < input.length; index++) {        // Минаваме по целия инпут
            encodedMessage += String.fromCharCode(input[index].charCodeAt() + 1);
            // Към съобщението добавяме всяка буква(нейния ASCII + 1) превърната пак в буква
        }
        decodeArea.value = encodedMessage;                // В другото поле изписваме енкодираоато съобщение
        textArea.value = "";                            // зачистваме полето да е празно
    }

    function decode(event) {
        let decodedMessage = "";                            // Първоначално декодираното съобщение е празно
        let input = decodeArea.value;                     // Взимаме въведената стойност във второто поле

        for (let index = 0; index < input.length; index++) {    // Минаваме по целия инпут
            decodedMessage += String.fromCharCode(input[index].charCodeAt(0) - 1);
            // Към съобщението добавяме всяка буква(нейния ASCII - 1) превърната пак в буква
        }
        decodeArea.value = decodedMessage;               // Полето за декодиране на съобщението е равно на декодираното
    }
}