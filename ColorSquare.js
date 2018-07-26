var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
//0 is blue, 1 is orange
var arr = [0, 1, 0, 0,
           0, 0, 0, 1,
           1, 0, 0, 0,
           0, 0, 1, 0];

function setup(){
    drawGrid();
    drawText();
    drawButtons();
}

function drawGrid(){
    strokeWeight(5)

    let x = 50;
    let y = 50;
    let i = 0;

    while(y < 400){
        while(x < 400){
            ctx.beginPath();
            ctx.lineWidth="3";
            ctx.strokeStyle = "black"
            ctx.rect(x, y, 100, 100);
            ctx.stroke()
            x+=100;

            if(arr[i] == 0)
                ctx.fillStyle = "blue";
            else
                ctx.fillStyle = "orange";

            ctx.fill();
            i++;
        }
        y+=100;
        x = 50;
    }
}

function drawText(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "black"

    ctx.fillText("Rows", 40, 500);
    ctx.fillText("Columns", 150, 500)
    ctx.fillText("Diagonals", 275, 500)
    ctx.fillText("Corners", 400, 500)

    ctx.fillText("Forward", 275, 550);
    ctx.fillText("Backward", 270, 595);
}

function drawButtons(){
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle = "black"

    //Rows
    ctx.rect(20, 515, 100, 25);
    ctx.rect(20, 540, 100, 25);
    ctx.rect(20, 565, 100, 25);
    ctx.rect(20, 590, 100, 25);

    //Columns
    ctx.rect(140, 515, 25, 100);
    ctx.rect(165, 515, 25, 100);
    ctx.rect(190, 515, 25, 100);
    ctx.rect(215, 515, 25, 100);

    //Diagonals
    ctx.rect(265, 515, 100, 50);
    ctx.rect(265, 565, 100, 50);

    //Corners
    ctx.rect(385, 515, 100, 100);

    //draws all the buttons
    ctx.stroke()
}

function mousePressed(e){
    //console.log("X: ", e.clientX, "    Y: ", e.clientY);

    //ROW BUTTON LOGIC
    if((e.clientX > 25 && e.clientX < 120) && (e.clientY > 515 && e.clientY < 540))
        changeFillVals([0, 1, 2, 3]);
    if((e.clientX > 25 && e.clientX < 120) && (e.clientY > 540 && e.clientY < 565))
        changeFillVals([4, 5, 6, 7]);
    if((e.clientX > 25 && e.clientX < 120) && (e.clientY > 565 && e.clientY < 590))
        changeFillVals([8, 9, 10, 11]);
    if((e.clientX > 25 && e.clientX < 120) && (e.clientY > 590 && e.clientY < 615))
        changeFillVals([12, 13, 14, 15]);

    //COLUMN BUTTON LOGIC
    if((e.clientX > 140 && e.clientX < 165) && (e.clientY > 515 && e.clientY < 615))
        changeFillVals([0, 4, 8, 12]);
    if((e.clientX > 165 && e.clientX < 190) && (e.clientY > 515 && e.clientY < 615))
        changeFillVals([1, 5, 9, 13]);
    if((e.clientX > 190 && e.clientX < 215) && (e.clientY > 515 && e.clientY < 615))
        changeFillVals([2, 6, 10, 14]);
    if((e.clientX > 215 && e.clientX < 240) && (e.clientY > 515 && e.clientY < 615))
        changeFillVals([3, 7, 11, 15]);

    //DIAGONAL BUTTON LOGIC
    if((e.clientX > 265 && e.clientX < 365) && (e.clientY > 515 && e.clientY < 565))
        changeFillVals([12, 9, 6, 3]);
    if((e.clientX > 265 && e.clientX < 365) && (e.clientY > 565 && e.clientY < 615))
        changeFillVals([0, 5, 10, 15]);

    //CORNER BUTTON LOGIC
    if((e.clientX > 385 && e.clientX < 485) && (e.clientY > 515 && e.clientY < 615))
        changeFillVals([0, 3, 12, 15]);

    drawGrid();
}

function changeFillVals(vals){
    for(let i = 0; i < 4; i++){
        var value = arr[vals[i]];
        switch(value){
            case 0: arr[vals[i]] = 1;
        break;
            case 1: arr[vals[i]] = 0;
        break;
        }
    }
}
