const registration = document.getElementById("navRegi");
const regcancel = document.getElementById("regcancel");
const regsubmit = document.getElementById("regsubmit");
const login = document.getElementById("navLogin");
const logcancel = document.getElementById("logcancel");

registration.addEventListener('click', function (event) {
    let regpanel = document.getElementById("registration");
    regpanel.style.display = "block";
});

regcancel.addEventListener('click', function () {
    let regpanel = document.getElementById("registration");
    regpanel.style.display = "none";
});

regsubmit.addEventListener('click', function () {
    let regpanel = document.getElementById("registration");
    regpanel.style.display = "none";
});

login.addEventListener('click', function () {
    let logpanel = document.getElementById("login");
    logpanel.style.display = "block";
});
logcancel.addEventListener('click', function () {
    let logpanel = document.getElementById("login");
    logpanel.style.display = "none";
});


$.getJSON('https://swapi.co/api/planets/', function (response) {
    let length = response['count'];
    let result = Math.ceil(length / 10);
    console.log(result)
});

const createTable = function () {
    $.getJSON('https://swapi.co/api/planets/', function (response) {
        let length = response['count'];
        let residentsNumber = 0;
        for (let i = 1; i < length + 1; i++) {
            $.getJSON(`https://swapi.co/api/planets/${i.toString()}`, function (response) {

                let row = document.createElement('tr');
                row.dataset.someDataAttr = "rowNumber";
                row.dataset.rowNumber = `${i.toString()}`;
                if (parseInt(row.dataset.rowNumber, 10) > 10) {
                    row.style.display = "none"
                }
                let planetName = document.createElement('td');
                planetName.textContent = response['name'];
                let planetNametext = response['name'];
                row.appendChild(planetName);
                let diameter = document.createElement('td');
                diameter.textContent = response['diameter'] + " km";
                row.appendChild(diameter);
                let cliamate = document.createElement('td');
                cliamate.textContent = response['climate'];
                row.appendChild(cliamate);
                let terrain = document.createElement('td');
                terrain.textContent = response['terrain'];
                row.appendChild(terrain);
                let water = document.createElement('td');
                water.textContent = response['surface_water'] + '%';
                row.appendChild(water);
                let population = document.createElement('td');
                if (response['population'] === 'unknown') {
                    population.textContent = 'unknown';
                } else {
                    population.textContent = response['population'] + ' people';
                }
                row.appendChild(population);
                let resident = document.createElement('td');

                if (response['residents'].length > 0) {
                    let residentbtn = document.createElement('button');
                    let summresident = response['residents'].length.toString();
                    residentbtn.textContent = summresident + " resident(s)";
                    residentbtn.someDataAttr = "planet-number";
                    residentbtn.dataset.planetNumber = `${i.toString()}`;
                    residentbtn.classList.add('resibutton');
                    resident.appendChild(residentbtn);
                    row.appendChild(resident);
                    let tableContainer = document.createElement('div');
                    tableContainer.classList.add(`${residentsNumber.toString()}`);
                    residentsNumber += 1;
                    let title = document.createElement('h1');
                    title.textContent = "Residents of " + `${planetNametext}`;
                    tableContainer.appendChild(title);
                    let table = document.createElement('table');
                    let headerRow = document.createElement('tr');
                    table.appendChild(headerRow);
                    let headername = document.createElement('th');
                    headername.textContent = "Name";
                    headerRow.appendChild(headername);
                    let headerheight = document.createElement('th');
                    headerheight.textContent = "Height";
                    headerRow.appendChild(headerheight);
                    let headermass = document.createElement('th');
                    headermass.textContent = "Mass";
                    headerRow.appendChild(headermass);
                    let headerhaircolor = document.createElement('th');
                    headerhaircolor.textContent = "Hair Color";
                    headerRow.appendChild(headerhaircolor);
                    let headerskincolor = document.createElement('th');
                    headerskincolor.textContent = "Skin Color";
                    headerRow.appendChild(headerskincolor);
                    let headereyecolor = document.createElement('th');
                    headereyecolor.textContent = "Eye color";
                    headerRow.appendChild(headereyecolor);
                    let headerbirth = document.createElement('th');
                    headerbirth.textContent = "Birth Year";
                    headerRow.appendChild(headerbirth);
                    let headergender = document.createElement('th');
                    headergender.textContent = "Gender";
                    headerRow.appendChild(headergender);
                    for (m = 0; m < response['residents'].length; m++) {
                        $.getJSON(`${response['residents'][m]}`, function (response) {
                            return (
                            let resiname = document.createElement('td');
                            resiname.textContent = response['name'];
                            let resirow = document.createElement('tr');
                            resirow.appendChild(resiname);
                            let resiheight = document.createElement('td');
                            resiheight.textContent = response["height"];
                            resirow.appendChild(resiheight);
                            let resimass = document.createElement('td');
                            resimass.textContent = response["mass"];
                            resirow.appendChild(resimass);
                            let resihair = document.createElement('td');
                            resihair.textContent = response["hair_color"];
                            resirow.appendChild(resihair);
                            let resiskin = document.createElement('td');
                            resiskin.textContent = response["skin_color"];
                            resirow.appendChild(resiskin);
                            let resieye = document.createElement('td');
                            resieye.textContent = response["eye_color"];
                            resirow.appendChild(resieye);
                            let resibirth = document.createElement('td');
                            resibirth.textContent = response["birth_year"];
                            resirow.appendChild(resibirth);
                            let resigender = document.createElement('td');
                            resigender.textContent = response["gender"];
                            resirow.appendChild(resigender);
                            table.appendChild(resirow);


                        });


                    }
                    let breakline = document.createElement('br');
                    tableContainer.appendChild(breakline);
                    let escbutton = document.createElement("button");
                    escbutton.textContent = 'Cancel';
                    tableContainer.appendChild(table);
                    tableContainer.appendChild(escbutton);

                    document.getElementById('resident').appendChild(tableContainer)


                } else {
                    resident.textContent = 'Not Known';
                    row.appendChild(resident)
                }
                let vote = document.createElement('td');
                let votebtn = document.createElement('button');
                votebtn.textContent = "Vote";
                votebtn.classList.add("voteButton");
                votebtn.dataset.someDataAttr = "planetID";
                votebtn.dataset.someDataAttr = "planetName";
                votebtn.dataset.planetId = `${i.toString()}`;
                votebtn.dataset.planetName = response['name'];

                vote.appendChild(votebtn);
                row.appendChild(vote);
                document.getElementById('planetTable').appendChild(row);



            })
        }
    });
    const residentButtons = document.querySelectorAll('.resibutton');
    console.log(residentButtons);
    for (const button of residentButtons) {
        button.addEventListener('click', function () {
            alert("gomb")
        })

    }

};

const voteButton = document.querySelectorAll("button.voteButton");
console.log(voteButton);
for (let u = 0; u < voteButton.length; u++) {
    voteButton[u].addEventListener('click', function () {
        console.log(voteButton[u]);
        alert("clicked")


    });
}
createTable();


const nextPage = document.getElementById("nextTableFragment");

nextPage.addEventListener("click", function () {
    let allRow = document.getElementsByTagName("tr");
    let rowsNumbers = [];
    for (let z = 0; z < allRow.length; z++) {

        rowsNumbers.push(parseInt(allRow[z].dataset.rowNumber, 10))
    }
    rowsNumbers.shift();
    console.log(rowsNumbers);
    for (let r = 0; r < rowsNumbers.length; r++) {

        if (allRow[r].style.display === "table" && parseInt(allRow[r].dataset.rowNumber, 10) === Math.max.apply(null, rowsNumbers)) {
            nextPage.style.backgroundColor = "red"
        } else {

            console.log('tyma');
            console.log(allRow[r]);
            if (allRow[r].style.display === "table-row") {
                console.log("miért?");

                let actualRowNumber = parseInt(allRow[r].dataset.rownumber, 10);
                console.log(actualRowNumber);
                console.log(allRow[r]);
                let increased = actualRowNumber + 10;
                let targetRow = document.querySelector(`[row-number=${increased.toString()}`);
                console.log(targetRow);
                allRow[r].style.display = "none";
                targetRow.style.display = "table-row";


            }

        }
    }

});

const residentButtons = document.querySelectorAll('.resibutton');
console.log(residentButtons);
for (const button of residentButtons) {
    button.addEventListener('click', function () {
        alert("gomb")
    })

}





