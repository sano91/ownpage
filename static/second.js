const voteButto = document.querySelectorAll("button.voteButton");
console.log(voteButto);
for (let u = 0; u < voteButto.length; u++) {
    voteButto[u].addEventListener('click', function () {
        console.log(voteButto[u]);
        alert("clicked")


    });
}