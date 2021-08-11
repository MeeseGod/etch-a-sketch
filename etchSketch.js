// Initiates a handful of global variables
let gridSize = 16;
let fullGridSize = gridSize * gridSize;
let currentColor = "rgba(0, 0, 0, 1)";
let baseColor = "rgba(0, 0, 0, 1)";
let colorFlag = 0;
let eraserMode = 0;

// Container for buttons
let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
document.body.append(buttonContainer);

// Creates a container div and divs for holding information
let information = document.createElement("div");
information.setAttribute("id", "information");
information.setAttribute("class", "information");
document.body.append(information);

    let sizeInformation = document.createElement("div");
    sizeInformation.setAttribute("id", "sizeInformation");
    sizeInformation.setAttribute("class", "information");
    information.appendChild(sizeInformation);
    sizeInformation.innerHTML = `Size: ${gridSize} x ${gridSize}`;   

    let modeInformation = document.createElement("div");
    modeInformation.setAttribute("id", "modeInformation");
    modeInformation.setAttribute("class", "information");
    information.appendChild(modeInformation);
    modeInformation.innerHTML = `Mode: Black`;  

// Creates a number of buttons and appends them to the page
let resetGrid = document.createElement("BUTTON");   
resetGrid.innerHTML = "Reset Grid";                   
buttonContainer.appendChild(resetGrid);  
resetGrid.setAttribute("class", "buttonStyle");
resetGrid.addEventListener("click", resetGridColor);

let rainbow = document.createElement("BUTTON");   
rainbow.innerHTML = "Rainbow Mode";                   
buttonContainer.appendChild(rainbow);  
rainbow.setAttribute("class", "buttonStyle");
rainbow.addEventListener("click", changeToRainbow);

let gradient = document.createElement("BUTTON");   
gradient.innerHTML = "Gradient";                   
buttonContainer.appendChild(gradient);  
gradient.setAttribute("class", "buttonStyle");
gradient.addEventListener("click", changeToGradient);

let black = document.createElement("BUTTON");   
black.innerHTML = "Black";                   
buttonContainer.appendChild(black);  
black.setAttribute("class", "buttonStyle");
black.addEventListener("click", changeToBlack);

let size = document.createElement("BUTTON");   
size.innerHTML = "Size";                   
buttonContainer.appendChild(size);  
size.setAttribute("class", "buttonStyle");
size.addEventListener("click", changeGridSize);
//

// Creates a number of gridSquare divs according to value of 'i' and appends them to the innerGrid div
function setGridSize(input){
    let test = `repeat(${input}, 1fr)`;
    document.getElementById("gridContainerID").style.gridTemplateColumns = test;
    document.getElementById("gridContainerID").style.gridTemplateRows = test;
    sizeInformation.innerHTML = `Size: ${input} x ${input}`;  
    let calculatedGrid = input * input;

    for (let i = 1; i < (calculatedGrid + 1); i++){
        let arrayDivs = [];
        arrayDivs[i] = document.createElement("div");
        gridContainerID.appendChild(arrayDivs[i]);
        arrayDivs[i].setAttribute("id", "gridSquare" + i);
        arrayDivs[i].setAttribute("class", "innerGrid");
        arrayDivs[i].setAttribute("style", "background-color: rgba(255,255, 255,1);");
    }
    fullGridSize = calculatedGrid;
}
// Initializes grid for the first time
setGridSize(gridSize);

// Changes div color on mouseover
    document.onmouseover = function(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    if (targ.nodeType == 3)
        targ = targ.parentNode;
   
    for (let i = 1; i <= fullGridSize; i++)
        // Changes div color to black if the div is any color but black
        if (targ.id == (`gridSquare` + i) && colorFlag == 0){
        let colorId = document.getElementById(targ.id);
            if (colorId.style.backgroundColor != "rgba(0, 0, 0, 1)"){
                colorId.style.backgroundColor = currentColor;
            }
        }
        // Changes div color to a random color if the div is black or white
        else if (targ.id == (`gridSquare` + i) && colorFlag == 1){
        let colorId = document.getElementById(targ.id);
                colorId.style.backgroundColor = changeToRainbow();
        }
        else if (targ.id == (`gridSquare` + i) && colorFlag == 2){
            let colorId = document.getElementById(targ.id);
            colorId.style.backgroundColor = changeToGradient();
        }
    }
// Resets the grid and sets the div colors to white
function resetGridColor(){
    for (let i= 1; i <= fullGridSize; i++){
        let targetID = `gridSquare` + i;
        let targetGrid = document.getElementById(targetID);
        targetGrid.style.backgroundColor = "rgba(255,255, 255,1)"
    }
}
// Sets it so the divs are painted random colors when hovered over now
function changeToRainbow(){
    colorFlag = 1;
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    modeInformation.innerHTML = `Mode: Rainbow`;  
    return color;
}

function changeToGradient(){
    colorFlag = 2;
    let colorGradient = "rgba(0, 0, 0, 0.1)";
    modeInformation.innerHTML = `Mode: Gradient`;  
    return colorGradient;
}

function changeGridSize(){
    let sizePrompt = prompt("What should the X & Y of our grid be? (Max of 64)", "16");
    if (sizePrompt != null && sizePrompt <= 64) {
        for (let i = fullGridSize; i > 0; i--){
            let myobj = document.getElementById("gridSquare" + i);
            myobj.remove();
        }
        setGridSize(sizePrompt);
      }
}

function changeToBlack(){
    colorFlag = 0;
    currentColor = "rgba(0, 0, 0, 1)";
    modeInformation.innerHTML = `Mode: Black`;  
}

// x = 0.1
// x =+ 0.1 on each pass
// 