// Select the body, main, and button elements in the HTML
const body = document.querySelector('body');
const main = document.querySelector('main');
const button = document.querySelector('button');

// Set the initial text content of the button
button.textContent = "Click to view a Puppy Card";

// Function to create a new puppy card
const createPuppyCard = (puppy) => {
    // Change the text content of the button to 'Go Back'
    button.textContent = 'Go Back';

    // Create the 'mainCard' element
    const mainCard = document.createElement('section');
    // Populate mainCard with HTML content using the provided puppy information
    mainCard.innerHTML = `
        <h4>Puppy: ${puppy.name}</h4>
        <h4>Breed: ${puppy.breed}</h4>
        <img src=${puppy.imageUrl} alt="Picture of a puppy"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ut ante nec justo eleifend venenatis.
        Proin sollicitudin egestas erat, eu.</p>
        <button id=randomPuppy> View A Random Puppy </button>
        <button id=allPuppies> View ALL Puppies </button>
        <button id=createNewPlayerButton> Create a New Player </button>
    `;
    // Append the mainCard to the main element in the HTML
    main.append(mainCard);
    // Apply styling to the mainCard
    mainCard.style.backgroundColor = 'lightblue';
    mainCard.style.display = 'flex';
    mainCard.style.flexDirection = 'column';
    mainCard.style.width = '25%';

    // Select the 'View Random Puppy' button inside mainCard
    const randomPuppyButton = document.querySelector(`#randomPuppy`);
    // Add an event listener to the 'View Random Puppy' button
    randomPuppyButton.addEventListener('click', async () => {
        // Clear the current content of main for a new Puppy
        main.innerHTML = '';
        
        // API Call to fetch a new set of puppies
        const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const puppyBowlAPICallResult = await puppyBowlAPICall.json();
        const puppyBowlAPIData = puppyBowlAPICallResult.data;
        const puppyPlayers = puppyBowlAPIData.players;

        // Select a random puppyPlayer from the fetched data
        const newSinglePuppyPlayer = Math.floor(Math.random() * puppyPlayers.length);
        const newPuppy = puppyPlayers[newSinglePuppyPlayer];
        // Create a new 'mainCard' element with the selected random puppy
        createPuppyCard(newPuppy);
    });

    // Select the 'View ALL Puppies' button inside mainCard
    const allPuppiesButton = document.querySelector(`#allPuppies`);
    allPuppiesButton.addEventListener('click', async () => {
        // Clear the current content of mainCard for a list of puppies
        main.innerHTML = '';
        // API Call to fetch the full list of puppies
        const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const puppyBowlAPICallResult = await puppyBowlAPICall.json();
        const puppyBowlAPIData = puppyBowlAPICallResult.data;

        // Create a new unordered list element to display the list of puppies
        const puppyList = document.createElement('ul');
        // Append the puppyList to the main element
        main.append(puppyList);

        // Loop through the list of puppies and create list items for each
        for (let i = 0; i < puppyBowlAPIData.players.length; i++) {
            const puppyListItemName = puppyBowlAPIData.players[i].name;

            // Create a new list item element with the puppy's name
            const puppyListItem = document.createElement('li');
            puppyListItem.textContent = puppyListItemName;

            // Add an event listener to the list item for click events
            puppyListItem.addEventListener('click', async () => {
                // Clear the current content of main for a new Puppy
                main.innerHTML = '';
                // Create the 'mainCard' element for the selected puppy
                const selectedPuppy = puppyBowlAPIData.players[i];
                createPuppyCard(selectedPuppy);
            });

            // Append the puppyListItem to the puppyList
            puppyList.appendChild(puppyListItem);
        }
    });

// Select the 'Create a New Player' button inside mainCard
const createNewPlayerButton = document.querySelector(`#createNewPlayerButton`);
// Add an event listener to the 'Create a New Player' button
createNewPlayerButton.addEventListener('click', async () => {
    // Clear the current content of main for the form
    main.innerHTML = '';
    // Create a form for creating a new player
    const newPlayerForm = document.createElement('form');
    newPlayerForm.innerHTML = `
        <label for="newPlayerName">Player Name:</label>
        <input type="text" id="newPlayerName" required>
        <label for="newPlayerBreed">Player Breed:</label>
        <input type="text" id="newPlayerBreed" required>
        <label for="newPlayerImage">Player Image:</label>
        <input type="url" id="newPlayerImage" required>
        <button type="submit">Create Player</button>
    `;
    // Add an event listener to the form for submission
    newPlayerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form data
        const newPlayerName = document.querySelector('#newPlayerName').value;
        const newPlayerBreed = document.querySelector('#newPlayerBreed').value;
        const newPlayerImage = document.querySelector('#newPlayerImage').value;

        try {
            // Perform a POST request to create a new player
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newPlayerName,
                    breed: newPlayerBreed,
                    imageUrl: newPlayerImage,
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to create a new player. Status: ${response.status}`);
            }

            const result = await response.json();
            // Handle the result as needed
            alert(`New player "${newPlayerName}" created!`);
        } catch (error) {
            console.error('Error during POST request:', error);
            // Handle the error, e.g., display an error message to the user
            alert('Error creating a new player. Please try again.');
        }
    });

    // Append the newPlayerForm to the main element
    main.append(newPlayerForm);
});

    // Return a reference to the created mainCard element
    return mainCard;
};

// Save the original state of the page
const originalState = main.innerHTML;

// Add an event listener to the button for click events
button.addEventListener('click', async () => {
    if (button.textContent === 'Go Back') {
        // Reset the page to its original state
        main.innerHTML = originalState;
        // Change the text content of the button back to the initial state
        button.textContent = "Click to view a Puppy Card";
    } else {
        // Change text of main button to say 'Go Back' once clicked
        button.textContent = 'Go Back';

        // API Call to fetch the list of puppies
        const puppyBowlAPICall = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const puppyBowlAPICallResult = await puppyBowlAPICall.json();
        const puppyBowlAPIData = puppyBowlAPICallResult.data;
        const puppyPlayers = puppyBowlAPIData.players;

        // Select a random puppyPlayer from the fetched data
        const singlePuppyPlayer = Math.floor(Math.random() * puppyPlayers.length);
        const puppy = puppyPlayers[singlePuppyPlayer];

        // Create the 'mainCard' element with the selected random puppy
        createPuppyCard(puppy);
    }
});

console.log(main);