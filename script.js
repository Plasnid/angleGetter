let angleField = document.querySelector("#angle");
let myClicker = document.querySelector("#clickeroo");
let myBody = document.querySelector("body");
myClicker.addEventListener("click", clickResponse);
angleField.addEventListener("keyup", fieldChanger);


function fieldChanger(e){
    console.log("I have been changed");
    console.log(e.target.value);
}


function clickResponse(e){
    console.log(`I have been clicked ${angleField.value}`);
    let myAngle = document.createElement("p");
    myAngle.innerText = angleField.value;
    myBody.appendChild(myAngle);
}