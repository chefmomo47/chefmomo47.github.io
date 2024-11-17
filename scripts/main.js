// change image

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/recipe-0001.jpg") {
        myImage.setAttribute("src", "images/recipe-0001-closeup.png");
    } else {
        myImage.setAttribute("src", "images/recipe-0001.jpg");
    }
};


// set username
let myButton = document.querySelector("button");
let myHeading = document.querySelector("#greeting");
function setUserName() {
    const myName = prompt("Bitte gib deinen Namen ein.");
    if (myName === null) {
        return;
    } else if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Guten Appetit, ${myName}!`;
    }
};
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Guten Appetit, ${storedName}!`;
};

myButton.onclick = () => {
    setUserName();
};