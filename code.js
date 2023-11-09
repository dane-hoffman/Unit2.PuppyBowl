
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

    //Select a random puppyPlayer from the puppyPlayers[], provide that name in the 'card.'
    const singlePuppyPlayer = Math.floor(Math.random() * puppyPlayers.length);
    const puppyName = puppyPlayers[singlePuppyPlayer].name;
    const puppyBreed = puppyPlayers[singlePuppyPlayer].breed;
    const puppyPicture = puppyPlayers[singlePuppyPlayer].imageUrl;

    console.log(puppyName);

    //Create the 'mainCard' element
    //Set the puppyName equal to the name of a puppy object from the API
    const mainCard = document.createElement('section');
    mainCard.innerHTML = '';
    mainCard.innerHTML = `
    <h4>Puppy: ${puppyName}</h4>
    <h4>Breed: ${puppyBreed}</h4>
    <img src=${puppyPicture} alt="Picture of a puppy"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec ut ante nec justo eleifend venenatis.
    Proin sollicitudin egestas erat, eu.</p>
    <button id=randomPuppy> ViewARandomPuppy </button>
    <button id=allPuppies> View ALL Puppies </button>
                            `;
    main.append(mainCard);
    
    //Use JavaScript to manipulate CSS of <section>
    mainCard.style.backgroundColor = 'lightblue';
    mainCard.style.display = 'flex';
    mainCard.style.flexDirection = 'column';
    mainCard.style.width = '25%';

    //On click, Create another button to 'view MORE puppies'
    const randomPuppyButton = document.querySelector(`#randomPuppy`);
    randomPuppyButton.addEventListener('click', () => {
        console.log('randomPuppy');

    });
    
    const allPupppies = document.querySelector(`#allPuppies`);
    console.log(allPuppies);
    //Displays a list of all puppies in the roster (make the mainCard dissappear)
    
            //Clicking on single puppy in list sets the mainCard values to that puppy

    //Reset the mainCard element each time the 'newPuppy' <button> is clicked
    // mainCard.innerHTML = '';

});


console.log(main);