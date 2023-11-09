const body = document.querySelector('body');
const main = document.querySelector('main');
const button = document.querySelector('button');
button.textContent = "Click to view a Puppy Card";

const createPuppyCard = (puppy) => {
    // Update button text
    button.textContent = 'Go Back';

    // Create mainCard element
    const mainCard = document.createElement('section');

    // Populate mainCard with HTML content
    mainCard.innerHTML = `
        <h4>Puppy: ${puppy.name}</h4>
        <h4>Breed: ${puppy.breed}</h4>
        <img src=${puppy.imageUrl} alt="Picture of a puppy"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ante nec justo eleifend venenatis. Proin sollicitudin egestas erat, eu.</p>
        <button id=randomPuppy> View A Random Puppy </button>
        <button id=allPuppies> View ALL Puppies </button>
        <button id=createNewPlayerButton> Create a New Player </button>
    `;

    // Append mainCard to main element
    main.append(mainCard);

    // Apply styling to mainCard
    mainCard.style.cssText = 'background-color: lightblue; display: flex; flex-direction: column; width: 25%;';

    // Event listener for 'View Random Puppy' button
    const randomPuppyButton = document.querySelector('#randomPuppy');
    randomPuppyButton.addEventListener('click', async () => {
        main.innerHTML = '';
        const puppyBowlAPICallResult = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players').then(res => res.json());
        const puppyPlayers = puppyBowlAPICallResult.data.players;
        const newPuppy = puppyPlayers[Math.floor(Math.random() * puppyPlayers.length)];
        createPuppyCard(newPuppy);
    });

    // Event listener for 'View ALL Puppies' button
    const allPuppiesButton = document.querySelector('#allPuppies');
    allPuppiesButton.addEventListener('click', async () => {
        main.innerHTML = '';
        const puppyBowlAPICallResult = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players').then(res => res.json());
        const puppyBowlAPIData = puppyBowlAPICallResult.data;
        const puppyList = document.createElement('ul');
        main.append(puppyList);

        // Create list items for each puppy
        for (const player of puppyBowlAPIData.players) {
            const puppyListItem = document.createElement('li');
            puppyListItem.textContent = player.name;

            // Event listener for list item click
            puppyListItem.addEventListener('click', async () => {
                main.innerHTML = '';
                createPuppyCard(player);
            });

            puppyList.appendChild(puppyListItem);
        }
    });

    // Event listener for 'Create a New Player' button
    const createNewPlayerButton = document.querySelector('#createNewPlayerButton');
    createNewPlayerButton.addEventListener('click', async () => {
        main.innerHTML = '';
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

        // Event listener for form submission
        newPlayerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const newPlayerName = document.querySelector('#newPlayerName').value;
            const newPlayerBreed = document.querySelector('#newPlayerBreed').value;
            const newPlayerImage = document.querySelector('#newPlayerImage').value;

            try {
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
                alert(`New player "${newPlayerName}" created!`);
            } catch (error) {
                console.error('Error during POST request:', error);
                alert('Error creating a new player. Please try again.');
            }
        });

        main.append(newPlayerForm);
    });

    return mainCard;
};

// Save the original state of the page
const originalState = main.innerHTML;

// Event listener for button click
button.addEventListener('click', async () => {
    if (button.textContent === 'Go Back') {
        // Reset the page to its original state
        main.innerHTML = originalState;
        button.textContent = "Click to view a Puppy Card";
    } else {
        // Change text of main button to say 'Go Back' once clicked
        button.textContent = 'Go Back';

        // API Call to fetch the list of puppies
        const puppyBowlAPICallResult = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players').then(res => res.json());
        const puppyPlayers = puppyBowlAPICallResult.data.players;
        const puppy = puppyPlayers[Math.floor(Math.random() * puppyPlayers.length)];

        // Create mainCard element with the selected random puppy
        createPuppyCard(puppy);
    }
});

console.log(main);