const people = [
    {name: 'Bob', knownMessage: null},
    {name: 'Jane', knownMessage: null},
    {name: 'Alex', knownMessage: null},
    {name: 'Kate', knownMessage: null},
    {name: 'Other Bob', knownMessage: null},
    {name: 'Mia', knownMessage: null},
    {name: 'John', knownMessage: null},
    {name: 'Emma', knownMessage: null},
];

const container = document.getElementById("callback");

for(let i = 0; i < people.length - 1; i++) { //we skip the last person, as there is none coming after her.
    people[i].nextPerson = people[i + 1];
}
console.log(people);

const initialMessage = 'The quick brown fox jumps over the lazy dog.';

function tellMessage(person, message, callback){
    let gameText = document.createElement('h3');
    gameText.textContent = `${person.name} got the message: ${message}`;
    container.appendChild(gameText);
    person.knownMessage = message;
    callback(person);  // pass the current person to the callback function, so it can do whatever it wants to do with this person.
}

function afterTellingTheMessage(person){
    if(person.nextPerson){  // decide if there is anyone coming after this person.
        let gameText = document.createElement('h3');
        gameText.textContent = `${person.name} turns to ${person.nextPerson.name} to forward the message.`;
        container.appendChild(gameText);
        tellMessage(person.nextPerson, person.knownMessage, afterTellingTheMessage);  // use the `tellMessage` function to tell the currently know message to this next person.
    }else{
        let gameText = document.createElement('h3');
        gameText.textContent =`There is no more people after ${person.name}.`;
        container.appendChild(gameText)
    }
}

tellMessage(people[0], initialMessage, afterTellingTheMessage);

const carA = {mark: 'A', waiting: true};
const carB = {mark: 'B', waiting: true};
const carT = {mark: 'T', waiting: true};

const rightOrder = ['B', 'T', 'A'];

const quarterBack = function(car) {
    if(car.mark === 'B'){
        console.log("shit")


    }
};

const carOrder = function(){
    let typedLetter = document.getElementById("carInput").value;
    let container = document.getElementById("carsContainer");
    console.log(typeof typedLetter.toUpperCase());
    if(typedLetter.toUpperCase() === "A" || typedLetter.toUpperCase() === "B" || typedLetter.toUpperCase() === "T"){
        container.innerHTML = `<h3>Found</h3>`;
        if(typedLetter.toUpperCase() === "B"){
            carA.waiting = true;
            carT.waiting = true;
            carB.waiting = false;
            container.innerHTML = `<h3>Set car A waiting = true, so it's stopped</h3><h3>Set car T waiting = true, so it's stopped</h3><h3>Set itself waiting = false, so it's going it's way</h3>`;
        }
        else if(typedLetter.toUpperCase() === "T"){
            carB.waiting = false;
            carA.waiting = true;
            carT.waiting = false;
            container.innerHTML = `<h3>Set car B waiting = false, and waiting until it's gone.</h3><h3>Set car A waiting = true, so it's has to wait</h3><h3>Set car T waiting = false, so it's going it's way</h3>`;


        }
        else{
            carB.waiting = false;
            carA.waiting = false;
            carT.waiting = false;
            container.innerHTML = `<h3>Set car B waiting = false, so it's go first</h3><h3>Set car T waiting = false, so it's go after the car B</h3><h3>Set car A waiting = false, so lastly it's goes it's way</h3>`
        }

    }
    else{
        container.innerHTML = `<h3>Your choosen car is not exists.</h3>`;


    }
    };
const cheaterCounter = function(){
    window.setInterval(function(){

    let minVisitors = 1;
    let maxVisitors = 40;
    let randomVisitors = (Math.floor(Math.random() * (+maxVisitors - +minVisitors)) + +minVisitors).toString();
    document.getElementById("counter").textContent = `${randomVisitors}`;

}, 1500);

};

cheaterCounter();
let time = 0;
const timerStart = function () {
    setInterval(function () {
        time += 1;

    }, 1000)

};
function stopTimer() {
    clearInterval(timerStart);
    if(time >= 26 && time <= 28){
        document.getElementById("stoppedTime").textContent = time.toString()+'sec'+ ' 👌';}
    else if(time > 24 && time < 30){
        document.getElementById("stoppedTime").textContent = time.toString()+'sec'+ ' 😒';}

    else{document.getElementById("stoppedTime").textContent = time.toString()+'sec'+ ' loser😂';}
    time = 0;

}