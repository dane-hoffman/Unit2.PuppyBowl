
const body = document.querySelector('body');
const  main = document.querySelector('main');
console.log(body);
console.log(main);

//Create a 'card' and render it to HTML
//
window.addEventListener('load', () => {
    const mainMessage = document.createElement('div');
    mainMessage.textContent = `Hello World!`;
    main.append(mainMessage);

});

const sayHello = "Hello!";
console.log(sayHello);