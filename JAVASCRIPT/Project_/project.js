// console.dir(window.document);

//how to use

// Select an element using get element by ID
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

//Select Element using Query Selector
// can select ID as well as Class
// const mainHeading = document.querySelector("#main-heading");
// const yourHeader = document.querySelector(".header");
// const navitem = document.querySelectorAll(".nav-item");
// console.log(mainHeading);
// console.log(yourHeader);
// console.log(navitem);


// Chnage Text 
// textContent innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// Change the Content of the Text

// mainHeading.textContent = "this is something else";
// console.log(mainHeading.textContent);

// Change the Style of Text
// const mainHeading  = document.querySelector("div.headline h2");
// mainHeading.style.backgroundColor="blue"
// mainHeading.style.border="2px solid green";
// console.log(mainHeading);

// get & set Attributes
// select anchor tag
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

const inputELement = document.querySelector(".form-Todo input");
console.log(inputELement.getAttribute("type"));