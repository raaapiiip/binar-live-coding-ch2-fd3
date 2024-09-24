// document.querySelector("button").addEventListener("click", handleClick("Rafif"));

// function handleClick(name) {
//     alert(`Hello FSW 2 - ${name}`);
// }

// console.log(document.querySelectorAll("button")[3])

// let totalButton = document.querySelectorAll("button").length;

// for (let i = 0; i < totalButton; i++) {
//     console.log(i);
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         // alert("Hello FSW 2" + i);

//         // Action setelah button di click
//         // let audio = new Audio("sounds/tom-1.mp3");
//         // audio.play();
//         this.style.color = "yellow";
//         switch (this.innerHTML) {
//             case "w":
//                 let tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 let tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "s":
//                 let tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "d":
//                 let tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             case "j":
//                 let snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "k":
//                 let crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "l":
//                 let kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
//         }
//     });
// }

let totalButton = document.querySelectorAll("button");

for (let i = 0; i < totalButton.length; i++) {
    totalButton[i].addEventListener("click", function () {
        buttonSound(this.innerHTML);
        buttonAnimation(this);
    });
}

document.addEventListener("keypress", function (eventKeyPress) {
    buttonSound(eventKeyPress.key);
    buttonAnimation(document.querySelector(`.${eventKeyPress.key}`));
});

function buttonSound(currentButton) {
    switch (currentButton) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(currentButton) {
    if (currentButton) {
        currentButton.style.color = "green";

        setTimeout(function () {
            currentButton.style.color = "";
        }, 2000);
    }
}