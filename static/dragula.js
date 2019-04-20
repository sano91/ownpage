var frst = document.getElementById('first');
var scnd = document.getElementById('second');
var thrd = document.getElementById('third');
var frth = document.getElementById('fourth');
var innerFirst = document.getElementById('innerfrst');
var innerSecond = document.getElementById('innerscnd');
var innerThird = document.getElementById('innerthrd');
var innerFourth = document.getElementById("innerfrth");
var moveAble = document.getElementsByClassName("moveable");

dragula([innerFirst, innerSecond, innerThird, innerFourth]);

//frst, scnd, thrd, frth
//

var containers = Array.prototype.slice.call(document.querySelectorAll("ul"));

var lis = Array.prototype.slice.call(document.querySelectorAll("li"));

var cards = Array.prototype.slice.call(document.querySelectorAll("cardsplace"));

console.log(containers, "<-containers,ul", lis);


var opts = {allowNestedContainers: true};
opts = {
    accepts: function (el, target, source, sibling) {

        // prevent dragged containers from trying to drop inside itself
        return !contains(el, target);
    }
};

//containers = containers.concat(lis);
//console.log(containers);
var drake = dragula(
    cards,
    containers,
    opts
).on('over', function (el, container) {
    container.classList.add('editing');
    el.classList.add('el-over');
}).on('out', function (el, container) {
    container.classList.remove('editing');
    el.classList.remove('el-over');
});

console.log(drake);

// http://ejohn.org/blog/comparing-document-position/
function contains(a, b) {
    return a.contains ?
        a != b && a.contains(b) :
        !!(a.compareDocumentPosition(b) & 16);
}

function prepareEmptyDropZones() {
    var lis = querySelectorAllArray("li:not(.file)");

    lis.forEach(function (el) {
        var firstUl = el.querySelector('ul');
        console.log(firstUl);
        if (firstUl === null) {
            //el.classList.add('empty');

            var emptyUl = document.createElement('ul');
            //emptyUl.classList.add('empty-drop-zone');
            el.appendChild(emptyUl);
        } else {
            el.classList.remove('empty');
        }
    });

    resetContainers();
}


function resetContainers() {
    drake.containers = Array.prototype.slice.call(document.querySelectorAll("ul"));
}

function querySelectorAllArray(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector))
}