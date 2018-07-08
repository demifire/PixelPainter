const pixelDiv = document.createElement('div');
document.body.appendChild(pixelDiv);

var lastClicked;
var grid = clickableGrid(12,12,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    // el.className='black';
    // if (lastClicked)
    //         lastClicked.className='';
    //         lastClicked = el;
});

document.body.appendChild(grid);
var color = null;

function clickableGrid( rows, cols){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = '';
            cell.addEventListener('click', function(){
                if(color === null){
                this.style.backgroundColor = 'pink';
            }else{
                this.style.backgroundColor = color;
            }
        }
        );
        }
    }
    return grid;
}

var colorDiv = document.createElement('div');
colorDiv.className = 'colorDivClass';
colorDiv.innerHTML = 'Black';
colorDiv.id = 'clickedEm';
document.body.appendChild(colorDiv);

colorDiv.addEventListener('click',function(){
    color = 'black';
    return color;
})

var colorDiv2 = document.createElement('div');
colorDiv2.className = 'colorDivClass';
colorDiv2.innerHTML = 'Green';
colorDiv2.id = 'clickedEm';
document.body.appendChild(colorDiv2);

colorDiv2.addEventListener('click',function(){
    color = 'green';
    return color;
})

// colorDiv.addEventListener('click', changeColor);

// var something = document.createElement('div');
// something.Id = 'clickedEm';
// something.innerHTML = 'something';
// document.appendChild(something);

function clickableGrid2( rows, cols){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = '';
            cell.addEventListener('click', function(arr){
                for(var l=0; l<arr.length;l++){
                    this.style.backgroundColor = arr[l]
                }
        }
        );
        }
    }
    return grid;
}

var grid2 = clickableGrid2(2,2, function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

});

document.body.appendChild(grid2);