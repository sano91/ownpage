function createElement(parent, tagname, textcontent, id, clas) {
    let element = document.createElement(tagname);
    if (textcontent) {
        element.textContent = textcontent;
    }
    if (id) {
        element.setAttribute('id', id);
    }
    if (clas) {
        element.setAttribute('class', clas)
    }
    parent.appendChild(element);
    return element
}

const body = document.getElementsByTagName('body');
const planetTable = document.querySelector('#planetTableBody');

function createTable(tableData) {
    const prevButton = createPrev(tableData['previous'], document.getElementById('skipper'));
    const nextButton = createNext(tableData['next'], document.getElementById('skipper'));
    var rownumber = 0;
    for (let row of tableData['results']) {
        rownumber++;
        let currentRow = createElement(planetTable, 'tr', null, null, 'planetRow');
        console.log(currentRow);
        createElement(currentRow, 'td', row["name"], null, 'planetName');
        createElement(currentRow, 'td', row["diameter"] + ' km', null, 'planetDiameter');
        createElement(currentRow, 'td', row["climate"], null, 'planetDiameter');
        createElement(currentRow, 'td', row['terrain'], null, "rowTerrain");
        if (row['surface_water'] === 'unknown') {
            createElement(currentRow, 'td', 'Unknown', null, 'planetWater')
        } else {
            createElement(currentRow, 'td', row['surface_water'] + '%', null, "planetWater");
        }
        createElement(currentRow, 'td', row['population'], null, 'planetPopulation');
        if (row['residents'].length > 0) {
            let resident = createElement(currentRow, 'td', null, null, "planetResident");
            let residentButton = createElement(resident, 'button', row['residents'].length + ' residents', "row" + rownumber, 'btn-info');
            residentButton.dataset.residentPlanet = row['url'];
            residentButton.setAttribute("data-toggle", "modal");
            residentButton.setAttribute("data-target", ".bd-example-modal-lg");
            residentButton.addEventListener('click', function () {
                let planetURL = this.dataset.residentPlanet;
                residentMODAL(planetURL);
            })


        } else {
            createElement(currentRow, 'td', 'Not known residents', null, 'noResident')
        }
        let vote = createElement(currentRow, 'td', null, null, 'voteBtn');
        vote.classList.add('none');
        let votelink = createElement(vote, 'a', 'Vote', null, 'voteLink');
        votelink.setAttribute('href', "/vote/"+row['name'])

    }
    if (prevButton) {
        handlePrevB(prevButton)
    }
    if (nextButton) {
        handleNextB(nextButton)
    }
    voter()
}

function suckTheData(url, callback) {
    fetch(url)  // set the path; the method is GET by default, but can be modified with a second parameter
        .then((response) => response.json())  // parse JSON format into JS object
        .then(json_response => callback(json_response));
}

function planetTableStand(url) {
    suckTheData(url, createTable)
}


planetTableStand('https://swapi.co/api/planets/');

function tableClear(rows) {
    for (let row of rows) {
        row.parentNode.removeChild(row)
    }
}

function createPrev(previous, parent) {
    if (previous) {
        let prev = createElement(parent, 'li', null, 'prev-button', 'page-item');
        createElement(prev, 'a', 'Previous', null, 'page-link');
        prev.dataset.prev = previous;
        return prev
    } else {
        let prev = createElement(parent, 'li', null, 'no-prev', 'page-item disabled');
        createElement(prev, 'a', 'Previous', null, 'page-link')
    }
}

function createNext(nexto, parent) {
    if (nexto) {
        let next = createElement(parent, 'li', null, 'next-button', 'page-item');
        createElement(next, 'a', 'Next', null, 'page-link');
        next.dataset.next = nexto;
        return next
    } else {
        let next = createElement(parent, 'li', null, 'no-next', 'page-item disabled');
        createElement(next, 'a', 'Next', null, 'page-link')
    }

}

function handlePrevB(prevButton) {
    prevButton.addEventListener('click', function () {
        tableClear(document.querySelectorAll('.planetRow'));
        let previ = document.getElementById('prev-button');
        if (previ) {
            previ.parentElement.removeChild(previ)
        } else {
            let noprevi = document.getElementById('no-prev');
            noprevi.parentElement.removeChild(noprevi)
        }
        let nexti = document.getElementById('next-button');
        if (nexti) {
            nexti.parentElement.removeChild(nexti)
        } else {
            let nonext = document.getElementById('no-next');
            nonext.parentElement.removeChild(nonext);
        }
        let prevURL = prevButton.dataset.prev;
        planetTableStand(prevURL)
    })
}

function handleNextB(nextButton) {
    nextButton.addEventListener('click', function () {
        tableClear(document.querySelectorAll('.planetRow'));
        let previ = document.getElementById('prev-button');
        if (previ) {
            previ.parentElement.removeChild(previ)
        } else {
            let noprevi = document.getElementById('no-prev');
            noprevi.parentElement.removeChild(noprevi)
        }
        let nexti = document.getElementById('next-button');
        if (nexti) {
            nexti.parentElement.removeChild(nexti)
        } else {
            let nonext = document.getElementById('no-next');
            nonext.parentElement.removeChild(nonext);
        }
        let nextURL = nextButton.dataset.next;
        planetTableStand(nextURL)
    })
}


function residentMODAL(url) {
    let rowsForDelete = document.querySelectorAll('.residentRow');
    let planetname = document.getElementById('modalPlanetName');
    if (planetname) {
        planetname.parentElement.removeChild(planetname)
    }
    tableClear(rowsForDelete);
    fetch(url)  // set the path; the method is GET by default, but can be modified with a second parameter
        .then((response) => response.json())  // parse JSON format into JS object
        .then((data) => {
            let header = document.getElementById('residentPlanetHeader');
            createElement(header, 'h1', data['name'], 'modalPlanetName', null);
            for (let resident of data['residents']) {
                fetch(resident)
                    .then((response) => response.json())
                    .then((resi) => {
                        const residentsModal = document.getElementById('residentMODAL');
                        let resirow = createElement(residentsModal, 'tr', null, null, 'residentRow');
                        createElement(resirow, 'td', resi['name'], null, 'residentName');
                        createElement(resirow, 'td', resi['height'] + 'cm', null, 'residentheight');
                        createElement(resirow, 'td', resi['mass'] + ' kg', null, 'residentMass');
                        createElement(resirow, 'td', resi['hair_color'], null, 'residentHair');
                        createElement(resirow, 'td', resi['skin_color'], null, 'residentSkin');
                        createElement(resirow, 'td', resi['eye_color'], null, 'residentEye');
                        createElement(resirow, 'td', resi['birth_year'], null, 'residentBirth');
                        createElement(resirow, 'td', resi['gender'], null, 'residentGender');

                    })
            }
        })
}


function checkPassword() {
    let clickCheck = document.getElementById('passwordCheck');
    clickCheck.addEventListener('click', function () {
        let passone = document.getElementById('formGroupExampleInput2').value;
        let passtwo = document.getElementById('formGroupExampleInput3').value;
        if (passone === passtwo) {
            comeAndGo(document.getElementById("matchOrNot"), 'p', 'Match ✅', 'come')
        } else {
            comeAndGo(document.getElementById("matchOrNot"), 'p', "Doesn't match 😅", 'falseCome')
        }

    })

}

checkPassword();


function comeAndGo(parent, tag, text, clas) {
    let element = createElement(parent, tag, text, null, clas);
    setTimeout(function () {
        element.parentElement.removeChild(element)
    }, 4000)

}

function myFunction() {
    var x = document.getElementById("formGroupExampleInput2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

const pw2 = document.getElementById('secondPWtoShow');
pw2.addEventListener('click', function () {
    myFunction1()

});

const pw1 = document.getElementById('firstPWtoShow');
pw1.addEventListener('click', function () {
    myFunction()

});

function myFunction1() {
    var x = document.getElementById("formGroupExampleInput3");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function voter() {
    if (document.getElementById('sessionName').textContent) {
        const votebutt = document.querySelectorAll('.voteBtn');
        console.log(votebutt);
        for (let votebtn of votebutt) {
            votebtn.classList.remove('none')
        }
    }
}
