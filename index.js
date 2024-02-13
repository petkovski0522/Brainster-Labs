

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
const filterOptions = document.querySelectorAll('.filter-option');
const cards = document.querySelectorAll('.card');

filterOptions.forEach((option) => {
  option.addEventListener('click', () => {
    filterOptions.forEach((otherOption) => {
      otherOption.classList.remove('active');
    });
    option.classList.add('active');

    const filterValue = option.getAttribute('data-filter');

    cards.forEach((card) => {
      const cardType = card.getAttribute('data-type');
      if (filterValue === cardType) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
