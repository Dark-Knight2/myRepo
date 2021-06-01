var restart = document.querySelector("#b");
var squares = document.querySelectorAll("td");
var hd = document.querySelector("h1");
var tic = document.querySelector("#tic");

function changeMarker(){
    if(this.textContent === ""){
        this.textContent = "X";
    }else if(this.textContent === "X"){
        this.textContent = "O";
    }else{
        this.textContent = "";
    }
}

for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click", changeMarker);
}

function randomColor(){
    var shade = "#";
    var letters = "0123456789ABCDEF";
    for(var i=0;i<6;i++){
        shade = shade+letters[Math.floor(Math.random()*16)];
    }
    return shade;
}
function changeColor(){
    rang = randomColor();
    hd.style.color = rang;
}
setInterval("changeColor()", 500);


restart.addEventListener("click",function(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent = "";
    }
    $("#tic").fadeOut(800).fadeIn(200);
})