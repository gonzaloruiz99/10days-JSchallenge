
const Allscreens = [
    {
        "id":1,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-1.jpg",
        "mobile":"./img/img-mobile-1.jpg",
    },
    {
        "id":2,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-2.jpg",
        "mobile":"./img/img-mobile-2.jpg",
    },
    {
        "id":3,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-3.jpg",
        "mobile":"./img/img-mobile-3.jpg",
    },
    {
        "id":4,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-4.jpg",
        "mobile":"./img/img-mobile-4.jpg",
    },
]


const containers = document.querySelector(".screens");




//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(Allscreens);
  });



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="screen page${item.id}">
            <div class="text">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
            </div>
        </article>
        
        `
    }).join("");
    containers.innerHTML = displayMenu;

}



  //move to next/previous using the keyboards

  window.addEventListener('keydown', (event) =>{
      switch(event.key){
          case 'ArrowUp': event.preventDefault();topFunction(); break;
          case 'ArrowDown': event.preventDefault();downFunction(); break;
      }
  })




const topBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");
const aPage = document.querySelector(".main-screen");

const pageHeight = aPage.scrollHeight;
console.log(pageHeight);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > pageHeight-10 || document.documentElement.scrollTop > pageHeight-10) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollBy({
      top: -pageHeight,
      behavior:'smooth'
  });
}
function downFunction() {
   window.scrollBy({
       top: pageHeight,
       behavior:'smooth'
   });

    
}



const udemy = 'udemy';



