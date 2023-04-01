const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    const linkList = document.querySelector('.links');
    linkList.classList.toggle('invisible');
})