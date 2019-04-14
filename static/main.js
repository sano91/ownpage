

const repeatfunc = function (){
    import {repeat} from '/home/kulin/codecool/ownPage/ownpage/static/lib.js';
    let repeatInput = document.getElementById("repeatinput").value();
    let finalString = repeat(repeatInput);
    let result = document.createElement('h1');
    result.textContent = finalString;
    document.getElementById("repeat").append(result)

};