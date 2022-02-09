// get multiple elements using getElements by Class Name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByTagName("a"); //HTML COllection
// console.log(navItems[2]);
// console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll(".nav-item"); //Node List
// console.log(navItems[1]);

// loop
// Simple For loop
// for of loop
// forEach loop
for(let i= 0;i<navItems.length;i++)
{
    // console.log(navItems[i]);
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold";
}