/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const maxium = 122;
const minium = 1;
const random = () => Math.floor(Math.random() * (maxium - minium)) + minium;
// crear imagen
const createImageNode = () => {

    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen)

    return container;
};

const nuevaImagen = createImageNode()
const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
};


addButton.addEventListener("click", addImage);
