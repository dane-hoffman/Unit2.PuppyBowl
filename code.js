
const body = document.querySelector('body');
const  main = document.querySelector('main');
const button = document.querySelector('button');

const puppyName = "${puppyName}";

//Create a 'card' and render it to HTML
window.addEventListener('load', () => {

    


    //Use JavaScript to manipulate CSS of <button>
    button.textContent = "Click for MORE Puppies!";
});

//Make the HMTL button dynamic
button.addEventListener('click', async() => {
    //Create the 'mainCard' element
    const mainCard = document.createElement('section');
    mainCard.innerHTML = `
    <h4>Puppy: ${puppyName}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec ut ante nec justo eleifend venenatis.
    Proin sollicitudin egestas erat, eu.</p>
                            `;
    main.append(mainCard);

    //Use JavaScript to manipulate CSS of <section>
    mainCard.style.backgroundColor = 'lightblue';
    mainCard.style.display = 'flex';
    mainCard.style.flexDirection = 'column';
    mainCard.style.width = '25%';

    const puppyBowlAPICall  = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
    const puppyBowlAPICallResult = await puppyBowlAPICall.json();

    console.log(puppyBowlAPICallResult);
    button.textContent = 'Go Back';

});

console.log(main);