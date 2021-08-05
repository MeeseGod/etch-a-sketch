// Creates a number of gridSquare divs according to value of 'i' and appends them to the innerGrid div
for (let i = 1; i <= 256; i++){
    var arrayDivs = [];
    var setAuto = "auto";
    arrayDivs[i] = document.createElement("div");
    gridContainerID.appendChild(arrayDivs[i]);
    arrayDivs[i].setAttribute("id", "gridSquare" + i);
    arrayDivs[i].setAttribute("class", "innerGrid");
}

// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your html file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your html).
// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
// float/clear
// inline-block
// flexbox
// CSS Grid
// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”
// Did you link your CSS stylesheet?
// Open your browser’s developer tools.
// Check if there are any errors in the JavaScript console.
// Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
// Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.