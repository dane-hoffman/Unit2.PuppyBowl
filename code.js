const body = document.querySelector('body');
const main = document.querySelector('main');
const button = document.querySelector('button');
button.textContent = "Click to view a Puppy Card";

// Function to create a new puppy card
const createPuppyCard = (puppy) => {
    button.textContent = 'Go Back';

    // Create the 'mainCard' element
    const mainCard = document.createElement('section');
    mainCard.innerHTML = `
        <h4>Puppy: ${puppy.name}</h4>
        <h4>Breed: ${puppy.breed}</h4>
        <img src=${puppy.imageUrl} alt="Picture of a puppy"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ut ante nec justo eleifend venenatis.
        Proin sollicitudin egestas erat, eu.</p>
        <button id=randomPuppy> View A Random Puppy </button>
        <button id=allPuppies> View ALL Puppies </button>
    `;
    main.append(mainCard);
    mainCard.style.backgroundColor = 'lightblue';
    mainCard.style.display = 'flex';
    mainCard.style.flexDirection = 'column';
    mainCard.style.width = '25%';

    // Click View Random Puppy, selects another random puppy
    const randomPuppyButton = document.querySelector(`#randomPuppy`);
    randomPuppyButton.addEventListener('click', async () => {
        // Clear the current content of mainCard for a new Puppy

        main.innerHTML = '';
        
        // API Call for a new set of puppies
        const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const puppyBowlAPICallResult = await puppyBowlAPICall.json();
        const puppyBowlAPIData = puppyBowlAPICallResult.data;
        const puppyPlayers = puppyBowlAPIData.players;

        // Select a random puppyPlayer from the puppyPlayers[], provide that name in the 'card.'
        const newSinglePuppyPlayer = Math.floor(Math.random() * puppyPlayers.length);
        const newPuppy = puppyPlayers[newSinglePuppyPlayer];
        // Create the new 'mainCard' element
        createPuppyCard(newPuppy);
    });

    // Displays a list of all puppies in the roster (make the mainCard disappear)
    const allPuppiesButton = document.querySelector(`#allPuppies`);
    allPuppiesButton.addEventListener('click', async () => {
    // Clear the current content of mainCard for a list of puppies
    main.innerHTML = '';
    const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
    const puppyBowlAPICallResult = await puppyBowlAPICall.json();
    const puppyBowlAPIData = puppyBowlAPICallResult.data;

    const puppyList = document.createElement('ul');
    main.append(puppyList);

    for (let i = 0; i < puppyBowlAPIData.players.length; i++) {
        const puppyListItemName = puppyBowlAPIData.players[i].name;

        const puppyListItem = document.createElement('li');
        puppyListItem.textContent = puppyListItemName;

        puppyList.appendChild(puppyListItem);
    }
});

    return mainCard;
};

// Save the original state of the page
const originalState = main.innerHTML;

// Make the HTML button dynamic
button.addEventListener('click', async () => {
    if (button.textContent === 'Go Back') {
        // Reset the page to its original state
        main.innerHTML = originalState;
        button.textContent = "Click to view a Puppy Card";
    } else {
        // Change text of main <button> to say 'Go Back' once clicked
        button.textContent = 'Go Back';

        // API Call
        const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const puppyBowlAPICallResult = await puppyBowlAPICall.json();
        const puppyBowlAPIData = puppyBowlAPICallResult.data;
        const puppyPlayers = puppyBowlAPIData.players;

        // Select a random puppyPlayer from the puppyPlayers[], provide that name in the 'card.'
        const singlePuppyPlayer = Math.floor(Math.random() * puppyPlayers.length);
        const puppy = puppyPlayers[singlePuppyPlayer];

        // Create the 'mainCard' element
        createPuppyCard(puppy);
    }
});
