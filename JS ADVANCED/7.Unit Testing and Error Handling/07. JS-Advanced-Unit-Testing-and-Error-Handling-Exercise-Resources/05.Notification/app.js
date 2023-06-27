function notify(message) {
  let button = document.querySelector('button')
  let notification = document.getElementById('notification')

  notification.textContent = message
  notification.style.display = "block"
  notification.addEventListener('click', () => {                // Закачаме слушател на div елемента и при click събитие, изпълняваме
    notification.style.display = "none"
  })
}