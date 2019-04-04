const petsData = [
    {name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://images.unsplash.com/photo-1547565393-1b180d53d82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    {
        name: "Barksalot",
        species: "dog",
        birthYear: 2008,
        photo: "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
    },
    {
        name: "Meawsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        photo: "https://www.thesprucepets.com/thmb/jmjH07779HzEkh6n1Mr7mwZ_AOc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/savannah-f6-shorthair-cat-538605863-5911fe343df78c9283bfa48f.jpg"
    }
]
function age(birthYear) {
    let calculatedAged = new Date().getFullYear() - birthYear;
    if (calculatedAged == 1) {
        return 'One year old'

    }else if (calculatedAged > 1) {
        return `${calculatedAged} years old.`
    }else {
        return 'Baby'
    }
}

function foods(foods) {
    return `
    <h4>favorite foods</h4>
    <ul class="food-list">
    ${foods.map(function(food){
    return `<li>${food}</li>`}).join('')
        }
</ul>
    `}


function petTemplate(pet) {
    return `
    <div class="animal">
        <img class="photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name}<span class="species"> (${pet.species})</span></h2>
        <p><strong>Age: </strong>${age(pet.birthYear)}</p>
        ${pet.favFoods ? foods(pet.favFoods) : ''}
    `
}

document.getElementById('app').innerHTML = `
<h1 class="app-title">Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join('')}
<p class="footer">These ${petsData.length} pets were added recently. Check for the updates</p>
    
    `

