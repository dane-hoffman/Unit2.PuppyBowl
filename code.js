
const body = document.querySelector('body');
const  main = document.querySelector('main');
const puppyName = "${puppyName}"

//Create a 'card' and render it to HTML
//
window.addEventListener('load', () => {
    const mainCard = document.createElement('section');
    mainCard.innerHTML = `
    <h4>Puppy: ${puppyName}</h4>
                            `;
    main.append(mainCard);
});

console.log(main);