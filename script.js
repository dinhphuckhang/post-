const card = document.querySelector('.card');
const openButton = document.querySelector('.open-button');

openButton.addEventListener('click', () => {
  card.classList.toggle('open');
});
