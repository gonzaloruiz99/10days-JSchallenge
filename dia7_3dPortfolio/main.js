

const data = [
    {

    },
]


const projectImgs  = document.querySelectorAll(".grid-box");



projectImgs.forEach(function(projectImg){
    const project = projectImg.querySelector(".project");
    const closeBtn = projectImg.querySelector(".close-btn");

    project.addEventListener("click", function(){
        projectImg.classList.add("show-text");
    })

    closeBtn.addEventListener("click", function(){
        projectImg.classList.remove("show-text");
    })

})


// _________________ FILTERS ______________________

const projectOne  = document.querySelector(".project1");
const projectTwo  = document.querySelector(".project2");
const projectThree  = document.querySelector(".project3");
const filters  = document.querySelectorAll(".filter");





filters.forEach(function(filter){
    filter.addEventListener("click", function(){

        
        console.log(filter.value);
        if(filter.value == "1"){
            
                projectOne.style.backgroundImage = "url(./img/photo-1.jpg)";
                projectTwo.style.backgroundImage = "url(./img/photo-4.jpg)";
                projectThree.style.backgroundImage = "url(./img/photo-7.jpg)";
        }else if(filter.value == "2"){
            projectOne.style.backgroundImage = "url(./img/photo-2.jpg)";
            projectTwo.style.backgroundImage = "url(./img/photo-5.jpg)";
            projectThree.style.backgroundImage = "url(./img/photo-8.jpg)";
        }else if(filter.value == "3"){
                projectOne.style.backgroundImage = "url(./img/photo-3.jpg)";
                projectTwo.style.backgroundImage = "url(./img/photo-6.jpg)";
                projectThree.style.backgroundImage = "url(./img/photo-9.jpg)";
            
        }

    })
})
