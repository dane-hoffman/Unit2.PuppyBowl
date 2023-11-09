
const body = document.querySelector('body');
const  main = document.querySelector('main');
//Grab the button

const puppyName = "${puppyName}"

//Create a 'card' and render it to HTML
window.addEventListener('load', () => {
    const mainCard = document.createElement('section');
    mainCard.innerHTML = `
    <h4>Puppy: ${puppyName}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec ut ante nec justo eleifend venenatis.
    Proin sollicitudin egestas erat, eu.</p>
                            `;
    main.append(mainCard);

    //Use JavaScript to manipulate CSS of an element
    mainCard.style.backgroundColor = 'lightblue';
    // main.style.display = 'inline-block';
    // main.style.width = '15 px';
    mainCard.style.display = 'flex';
    mainCard.style.flexDirection = 'column';
    mainCard.style.width = '25%';
});

console.log(main);