

export const notify = (message) => {
  const notification = document.getElementById('errorBox');
  notification.querySelector('span').textContent = message;
  notification.style.display = "block";
  
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}