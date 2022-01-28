


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
})



const icons = document.querySelectorAll(".icon");

const heroSlides = document.querySelectorAll(".hero__slide");
const slider = document.querySelector(".hero-slider");
heroSlides[0].style.display = "block";

icons.forEach(function(icon){
    // console.log(icon.parentElement);
    icon.addEventListener('click',function(e){

        icons.forEach(function(item){
            if (item !== icon) {
                item.parentElement.classList.remove("selected");
            } 
        });
        icon.parentElement.classList.toggle("selected");
        
        icons.forEach(function(item){
            if (item !== icon) {
                let others = item.parentElement.value;
                heroSlides[others].style.display = "none";
            } 
        });
        // console.log(icon.parentElement.value);
        heroSlides[icon.parentElement.value].style.display = "block";

    });
});







/* show each slide:
1. querySelectorAll to select each individual hidden
2. Access each one by their icons and number or ID
3. Access each property "overflow" or "display" to show it, and hide the rest.

alt: Usar una funcion onClick en cada icono, que ponga el color o video de background y el slide segun el ID del 
icono o algo

*/




console.log(heroSlides[0]);


//slider.style.backgroundColor  = "#2c343b";
slider.style.backgroundColor  = "#3F4953";