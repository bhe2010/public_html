
function crap() {

  //  declare image array 

  let img = new Array("dice_1.gif", "dice_2.gif", "dice_3.gif", "dice_4.gif", "dice_5.gif", "dice_6.gif")
  // rolling each die randomly 

  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;

  // sum of rolling 2 dice
  var total = die1 + die2;

  let result = " <h3 class=header>The result is:</h3> <p>";
  result += " dice 1 roll is: " + die1 + "<p> <img src=" + img[die1 - 1] + "> <p>";
  result += " <p> dice 2 roll is: " + die2 + "<p> <img src=" + img[die2 - 1] + "> <p>";
  result += " <p>The sum is " + total + "<p>";


  if (total == 7 || total == 11) {
    result += "<p> you won the game - congrats! ";
  }

  // create a variable to hold the first few HTML tags
  let HTMLHEAD = " <!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'><link rel='stylesheet' href='crap.css'><script src='crap.js'></script</head> <body>";

  // open a new document  
  document.open();

  // write the HTML first few lines into the document which includes css file
  document.write(HTMLHEAD);

  // add the title 
  document.title = "Game of luck!";

  document.write(result);

  document.write("<p><button onclick='crap()'> try your luck again</button>");

  document.write("<script type='text/javascript' src='crap.js'> </script>");

}

