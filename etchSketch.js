// Made by MeeseGod for The Odin Project!
let gridSize = 16;
let fullGridSize = gridSize * gridSize;
let currentColor = "rgba(0, 0, 0, 1)";
let baseColor = "rgba(0, 0, 0, 1)";
let colorFlag = 0;

let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
document.body.append(buttonContainer);

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

let shade = document.createElement("BUTTON");   
shade.innerHTML = "Shade to Black";                   
buttonContainer.appendChild(shade);  
shade.setAttribute("class", "buttonStyle");
shade.addEventListener("click", changeToShade);

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

let colorWheel = document.createElement("INPUT");
buttonContainer.appendChild(colorWheel);
colorWheel.setAttribute("type", "color");
colorWheel.setAttribute("id", "colorWheel");
colorWheel.setAttribute("name", "colorWheel");
colorWheel.setAttribute("value", "#ff0000");
colorWheel.addEventListener("change", watchColorWheel, false);

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

    if (targ.id == (`gridSquare` + i) && colorFlag == 0){
    let colorId = document.getElementById(targ.id);
        if (colorId.style.backgroundColor != "rgba(0, 0, 0, 1)"){
            colorId.style.backgroundColor = currentColor;
        }
    }
    else if (targ.id == (`gridSquare` + i) && colorFlag == 1){
    let colorId = document.getElementById(targ.id);
            colorId.style.backgroundColor = changeToRainbow();
    }
    else if (targ.id == (`gridSquare` + i) && colorFlag == 2){
        let colorId = document.getElementById(targ.id);
        let sendToShade = colorId.style.backgroundColor;
        colorId.style.backgroundColor = changeToShade(sendToShade);
    }
}

function resetGridColor(){
    for (let i= 1; i <= fullGridSize; i++){
        let targetID = `gridSquare` + i;
        let targetGrid = document.getElementById(targetID);
        targetGrid.style.backgroundColor = "rgba(255,255, 255,1)"
    }
}

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

function changeToShade(input){
    colorFlag = 2;
    modeInformation.innerHTML = `Mode: Shade to Black`; 
    let black = "rgb(0, 0, 0)";
    let y = 0.1;

    if (typeof input == "string" && input.indexOf('rgb') > -1){
        if (input == black){
            return(black);
        }
        else if (typeof input == "string" && input.indexOf('rgba') > -1){
            let splitInput = input.split(" ");
            let grabTransRating = splitInput[3].replace(")","");
            let parseTransRating = parseFloat(grabTransRating);
            if(parseTransRating <= 0.8){
                return(`rgba(0, 0, 0, ${parseTransRating + y})`);
            }
            else if(parseTransRating == 0.9){
                return(black);
            }
        }
        else{
           return(`rgba(0, 0, 0, ${y})`);
        }
    }
    else{
        return(black);
    }
}

function changeGridSize(){
    let sizePrompt = prompt("What should the X & Y of our grid be? (Max of 100 | Minimum of 1)", "16");
    if (sizePrompt != null && sizePrompt <= 100 && sizePrompt > 0) {
        for (let i = fullGridSize; i > 0; i--){
            let myobj = document.getElementById("gridSquare" + i);
            myobj.remove();
        }
        setGridSize(sizePrompt);
    }
    else{
        alert("Error: Invalid grid size input. Try again!");
    }
}

function changeToBlack(){
    colorFlag = 0;
    currentColor = "rgba(0, 0, 0, 1)";
    modeInformation.innerHTML = `Mode: Black`;  
}

function updateFirst(event) {
    console.log("Update First: " + event);
}

function watchColorWheel(event) {
    colorFlag = 0;
    currentColor = event.target.value;
    modeInformation.innerHTML = `Mode: Custom Color`;  
}