
const body = document.querySelector('body');
const  main = document.querySelector('main');
const puppyName = "${puppyName}"

//Create a 'card' and render it to HTML
//
window.addEventListener('load', () => {
    const cardMainHeader = document.createElement('div');
    cardMainHeader.textContent = `Puppy: ${puppyName}`;
    main.append(cardMainHeader);
});

console.log(main);