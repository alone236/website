const skillListItems = document.querySelectorAll('section:nth-of-type(2) ul li');

skillListItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You want to learn more about ${item.textContent}?`);
  });
});
