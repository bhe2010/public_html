const newPar1 = "Now refresh the page to refresh the button!";
const newPar2 = "Also press the home button to go back to the personal website";

function change() {
    var el2 = document.getElementById("par1");
    var el3 = document.getElementById("par2");
    const root = document.querySelector(":root");
    document.body.style.background = "#45C4B0";
    document.body.style.fontFamily = '"Times New Roman", Times, serif';

    root.style.setProperty("--new-gray", 'white');
    root.style.setProperty("--new-white", 'gray');

    el2.innerHTML = newPar1;
    el3.innerHTML = newPar2;
}

function swapT() {
    var el1 = document.getElementById("par1");
    var el2 = document.getElementById("par2");

    const string1 = par1.innerHTML;
    par1.innerHTML = par2.innerHTML;
    par2.innerHTML = string1;
}

function swapImg() {
    var el1 = document.getElementById("img1");
    var el2 = document.getElementById("img2");

    const string1 = img1.src;
    img1.src = img2.src;
    img2.src = string1;
}