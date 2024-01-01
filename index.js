//var buttonClick = document.querySelectorAll("button");
document.querySelector("h1").addEventListener("click", function(){
        document.querySelector("#drum").classList.remove("visibility2");
        document.querySelector("#piano").classList.add("visibility");
        document.querySelectorAll("p")[0].classList.add("selected");
        document.querySelectorAll("p")[1].classList.remove("selected");
});

document.querySelector("h2").addEventListener("click", function(){
        document.querySelector("#piano").classList.remove("visibility");
        document.querySelector("#drum").classList.add("visibility2");
        document.querySelectorAll("p")[1].classList.add("selected");
        document.querySelectorAll("p")[0].classList.remove("selected");
});

var buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", keyClick);
}    
function keyClick() {
        //var buttonInnerHTML = this.innerHTML;
        playSound(this.innerHTML);
}   

document.addEventListener("keydown", keyPress);
function keyPress(x){
         playSound(x.key)
}

function playSound (x){
       
        switch (x) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
                
            case "a":
                    var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play();
                    break;

            case "s":
                    var tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play();
                    break;

            case "d":
                    var tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play();
                    break;

            case "j":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play();
                    break;

            case "k":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play();
                    break;

            case "l":
                    var kick = new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                    break;
                
        
            default:
                break;
        }
    
        
};

var pianoKeys = document.querySelectorAll(".key");

for(var i = 0; i<pianoKeys.length; i++){
    document.querySelectorAll(".key")[i].addEventListener("click",pianoClick);
}

function pianoClick(){
   // alert("I got clicked");
    //console.log(this.id);

    switch (this.id) {
        case "c":
            var c = new Audio("./sounds/c3.mp3");
            c.play();
            break;
        case "cSharp":
            var cSharp = new Audio("./sounds/db3.mp3");
            cSharp.play();
            break;
        case "d":
            var d = new Audio("./sounds/d3.mp3");
            d.play();
            break;
        case "eFlat":
            var eFlat = new Audio("./sounds/eb3.mp3");
            eFlat.play();
            break;
        case "e":
            var e = new Audio("./sounds/e3.mp3");
            e.play();
            break;
        case "f":
            var f = new Audio("./sounds/f3.mp3");
            f.play();
            break;
        case "fSharp":
            var fSharp = new Audio("./sounds/gb3.mp3");
            fSharp.play();
            break;
        case "g":
            var g = new Audio("./sounds/g3.mp3");
            g.play();
            break;
        case "gSharp":
            var gSharp = new Audio("./sounds/ab3.mp3");
            gSharp.play();
            break;
        case "a":
            var a = new Audio("./sounds/a3.mp3");
            a.play();
            break;
        case "bFlat":
            var bFlat = new Audio("./sounds/bb3.mp3");
            bFlat.play();
            break;
        case "b":
            var b = new Audio("./sounds/b3.mp3");
            b.play();
            break;
        
        default:
            break;
    }
}





// function clickfunction (){
//     alert("I got clicked")
// };

// var audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();
