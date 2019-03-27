const createCard = function (title, text, image) {
    const container = document.createElement('div');
    container.classList.add('card');

    const topImage = document.createElement('div');
    topImage.classList.add('card-img-top');
    topImage.setAttribute('src', image);
    container.appendChild(topImage);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = text;
    cardBody.appendChild(cardText);

    container.appendChild(cardBody);

    return container;
};

const cardElement = createCard(
    'Javascrirpt',
    'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png');
document.querySelector('#container').appendChild(cardElement);



document.querySelector('#container').appendChild(cardElement);

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("hokusz");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function ali() {
    alert("megy te buzi");
}

function openForm() {
    document.getElementById("registe").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function openlogin() {
    document.getElementById("myForm").style.display = "block";
}


function homeheader() {
    document.getElementById("homeheader").style.backgroundColor = "white";
    document.getElementById("homeheader").style.borderRadius = "28px";
    document.getElementById("homeheader").style.opacity = "0.2";
}