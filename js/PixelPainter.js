var pixelDiv = document.createElement('div');
pixelDiv.id = 'pixelDiv';
document.body.appendChild(pixelDiv);

var colorDiv = document.createElement("table");
colorDiv.className = "colorDiv";
pixelDiv.appendChild(colorDiv);

var grid = clickableGrid(15,15);

pixelDiv.appendChild(grid);
var color = null;

function clickableGrid( rows, cols){
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = '';
            cell.className = 'cells'
            cell.addEventListener('click', function(){
                if(color === null){
                this.style.backgroundColor = 'indianred';
            }else{
                this.style.backgroundColor = color;
            }
        }
        );
        }
    }
    return grid;
}

for (var i=0; i<9; i++) {
    var makeColorRow = document.createElement("tr");
    makeColorRow.className = "colorRow";
    colorDiv.appendChild(makeColorRow);
}
var colorRow = document.getElementsByClassName("colorRow");

for (var i=0; i<colorRow.length; i++) {
    for (var j=0; j<8; j++) {
        var makeColorSquare = document.createElement("td");
        makeColorSquare.className = "colorSquare";
        makeColorSquare.addEventListener("click", selectColor);
        colorRow[i].appendChild(makeColorSquare);
    }
}

var colorSquare = document.getElementsByClassName("colorSquare");
colorSquare[0].style.border = "1px solid yellow"

function selectColor() {
    for (var i=0; i<colorSquare.length; i++) {
        if (colorSquare[i].style.border === "1px solid yellow") {
            colorSquare[i].style.border = "";
        }
    }
    color = this.style.backgroundColor;
    console.log(color);
    this.style.border = "1px solid yellow";
}

var colorArr = ["indianred", "lightcoral", "salmon", "crimson", "red", "firebrick", "darkred", "maroon", "coral", "tomato", "orangered", "darkorange", "orange", "gold", "yellow", "sandybrown", "goldenrod", "darkgoldenrod", "khaki", "lime", "springgreen", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "olivedrab", "lightseagreen", "darkcyan", "teal", "aqua", "turquoise", "mediumturquoise", "steelblue", "skyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "blue", "mediumblue", "darkblue", "midnightblue", "darkslateblue", "slateblue", "indigo", "rebeccapurple", "purple", "darkorchid", "darkviolet", "blueviolet", "mediumorchid", "magenta", "orchid", "violet", "plum", "pink", "lightpink", "hotpink", "deeppink", "mediumvioletred", "burlywood", "tan", "rosybrown", "peru", "chocolate", "saddlebrown", "sienna", "brown", "black", "grey", "lightgrey", "white"]

for (var i=0; i<colorArr.length; i++) {
    colorSquare[i].style.backgroundColor = colorArr[i];
}

var clear = document.createElement('button');
clear.innerHTML = "Clear";
clear.id = 'clearButton';
document.body.appendChild(clear);

clear.addEventListener('click', makeGridWhite)

function makeGridWhite(){
    var allSquares = document.querySelectorAll('.cells');
    for(var i=0;i<allSquares.length;i++){
        allSquares[i].style.backgroundColor = "white";
    }
}

var erase = document.createElement('button');
erase.innerHTML = "Erase";
erase.id = 'eraseButton';
document.body.appendChild(erase);

erase.addEventListener('click', makeColorWhite)

function makeColorWhite(){
    for (var i=0; i<colorSquare.length; i++) {
        if (colorSquare[i].style.border === "1px solid yellow") {
            colorSquare[i].style.border = "";
        }
    }
    color = 'white';
    colorSquare[71].style.border = "1px solid yellow"
}