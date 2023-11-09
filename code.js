
const body = document.querySelector('body');
const  main = document.querySelector('main');
const button = document.querySelector('button');
button.textContent = "Click to view a Puppy Card";

//Make the HMTL button dynamic
button.addEventListener('click', async() => {
    //Change text of main <button> to say 'Go Back'once clicked
    button.textContent = 'Go Back';

    //API Call
    const puppyBowlAPICall  = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
    const puppyBowlAPICallResult = await puppyBowlAPICall.json();
    const puppyBowlAPIData = puppyBowlAPICallResult.data;
    const puppyPlayers = puppyBowlAPIData.players;

    console.log(puppyPlayers);
    const puppyName = puppyPlayers[0].name;

    //Create the 'mainCard' element
    //Set the puppyName equal to the name of a puppy object from the API
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

    //On click, Create another button to 'view MORE puppies'
        //Displays a list of all puppies in the roster (make the mainCard dissappear)
            //Clicking on single puppy in list sets the mainCard values to that puppy


});

console.log(main);