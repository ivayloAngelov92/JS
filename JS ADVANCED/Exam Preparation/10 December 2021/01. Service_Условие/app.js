window.addEventListener('load', solve);

function solve() {
    const inputs = {                                      // Изваждане в един обект, четирите инпут полета 
        type: document.getElementById("type-product"),
        description: document.getElementById("description"),
        name: document.getElementById("client-name"),
        phone: document.getElementById("client-phone"),
    };

    const orders = {                                        // Изваждане в един обект, двете полета за поръчките 
        received: document.getElementById("received-orders"),
        completed: document.getElementById("completed-orders"),
    };

    const sendBtn = document.querySelector('button');  // Изваждаме двата бутона, на страницата 
    const clearBtn = document.getElementsByClassName('clear-btn')[0]
    sendBtn.addEventListener("click", send);                                      // На Send бутона добавяме слушател с функция 

    function send(event) {
        event.preventDefault();

        let type = inputs.type.value;                 // Правим променливи за инпут полетата 
        let description = inputs.description.value;
        let name = inputs.name.value;
        let phone = inputs.phone.value;

        if (description === "" || name === "" || phone === "") {  // Проверяваме, ако някое от полетата е празно, не изпълняваме нищо
            return;
        }

        let div = document.createElement("div");                  // Създаваме div 
        div.className = "container";                           // Добавяме клас 

        let h2 = document.createElement("h2");                    // Създаваме h2
        h2.textContent = `Product type for repair: ${type}`;      // Добавяме съдържание 

        let h3 = document.createElement("h3");                    // Създаваме h3
        h3.textContent = `Client information: ${name}, ${phone}`; // Добавяме съдържание 

        let h4 = document.createElement("h4");                    // Създаваме h4 
        h4.textContent = `Description of the problem: ${description}`;  // Добавяме съдържание 

        let startBtn = document.createElement("button");          // Създаваме бутон за Start 
        startBtn.className = "start-btn";                      // Добавяме клас 
        startBtn.textContent = "Start repair";                    // Добавяме съдържание 

        let finishBtn = document.createElement("button");         // Създаваме бутон за Finish
        finishBtn.className = "finish-btn";                    // Добавяме клас 
        finishBtn.disabled = true;                                // Казваме на бутона да е неактивен
        finishBtn.textContent = "Finish repair";                  // Добавяме съдържание 

        div.appendChild(h2);                                      // Закачаме елементите поред за div 
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        orders.received.appendChild(div);                         // Закачаме получения div за получените поръчки 

        inputs.description.value = "";                            // Зачистваме инпут полетата
        inputs.name.value = "";
        inputs.phone.value = "";
        inputs.type.value = "";

        startBtn.addEventListener("click", start);              // Закачаме слушател за start бутона 
        function start() {
            startBtn.disabled = true;                             // Изключваме start бутона 
            finishBtn.disabled = false;                           // Включваме finish бутона 
        }

        finishBtn.addEventListener("click", finish);            // Закачаме слушател за finish бутона
        function finish() {
            orders.completed.appendChild(div);                    // Преместваме div от received в completed 
            startBtn.remove();                                    // Премахваме start бутона 
            finishBtn.remove();                                   // Премахваме finish бутона 
        }
    }

    clearBtn.addEventListener("click", clear);                // Закачаме слушател за clear бутона
    function clear() {
        orders.completed.innerHTML = `
        <h2>Completed orders:</h2>
        <img src="./style/img/completed-order.png">
        <button class="clear-btn">Clear</button>`;                        // Като направим innerHTML да е празен, трием всико вътре 
    }
}