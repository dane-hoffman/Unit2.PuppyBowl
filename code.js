
const body = document.querySelector('body');
const  main = document.querySelector('main');
//Grab the button
const button = document.querySelector('button');
console.log (button);

const puppyName = "${puppyName}"

//Create a 'card' and render it to HTML
window.addEventListener('load', () => {

    //Create the 'mainCard' element
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

//Make the HMTL button dynamic
button.addEventListener('click', () => {
    const buttonHasBeenClicked  = 'I have been clicked!';
    console.log(buttonHasBeenClicked);

});

console.log(main);