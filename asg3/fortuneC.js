

var fortune = new Array ("Do what you love. The rest will fall into place",
    "Change comes with embracing the future, not fighting your past",
    "You will receive great news today");

var bg = new Array ("images/love.JPG", "images/change.JPG", "images/news.JPG");

function change(){
    var r = Math.floor(Math.random() * fortune.length);

    document.getElementsByClassName("txt")[0].innerHTML = fortune[r];
    document.getElementById("imageC").src = bg[r];
}

window.onload = change; 