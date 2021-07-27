var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberOfDrumButtons; i++){

    var music = document.querySelectorAll(".drum")[i].addEventListener('click', function(){

        
    // var music = document.querySelector('.drum')[i];
    // music.addEventListener('click', function(){

        // var audio = new Audio("sounds/tom-3.mp3");
        // audio.play();
        // var audio = new Audio("sounds/tom-3.mp3");
        // var audio_one = new Audio("sounds/crash.mp3");
        // if(document.getElementsByClassName('a')){
        //     var audio = new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // }
        // else if(document.getElementsByClassName('b')){
        //     var audio_one = new Audio("sounds/crash.mp3");
        //     audio_one.play();
        // }

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        AddAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    AddAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "b":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

        case "c":
            var bass = new Audio("sounds/snare.mp3");
            bass.play();
            break;

        case "d":
            var bass = new Audio("sounds/tom-1.mp3");
            bass.play();
            break;

        case "e":
            var bass = new Audio("sounds/tom-2.mp3");
            bass.play();
            break;

        case "f":
            var bass = new Audio("sounds/tom-3.mp3");
            bass.play();
            break;

        case "g":
            var bass = new Audio("sounds/tom-4.mp3");
            bass.play();
            break;
    
        default:
    }
}



// var music = document.querySelector('#options');
// document.addEventListener('click', function(){
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// })


function AddAnimation(currentKey) {

    var animation = document.querySelector("." + currentKey);
  
    animation.classList.add("pressed");

    setTimeout(function(){
        animation.classList.remove("pressed");
    }, 100);
}

