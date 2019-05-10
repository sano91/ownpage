const createCard = function(title, text, image){
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

const cardElement1 = createCard(
     'Css',
     'CSS is my favorite subject, but very easy to screw up, lol.',
     'https://zdnet4.cbsistatic.com/hub/i/2019/03/10/91d922e7-ee54-4234-8be6-3ae62846dcd4/791d477482418cde705d839b688635c9/css-logo.jpg'
);

document.querySelector('#container').appendChild(cardElement);

