const button = document.querySelector('h2.main_buttone');
const modal = document.querySelector('.modal0')

window.addEventListener('click', (evt) => {
    evt.preventDefault();
      if (evt.target === button) {
         modal.classList.remove('close-modal')
         modal.classList.add('open-modal');
      } else {
         modal.classList.remove('open-modal');
         modal.classList.add('close-modal');
      }
})
