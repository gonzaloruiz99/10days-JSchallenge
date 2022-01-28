
const Monthlyplans = [
    {
        "id":1,
        "special": "",
        "type": "basic",
        "price": 30,
        "yearPrice": 330,
        "memory": "256MB",
        "user": 1,
        "website": 1,
        "domain": 1,
        "bandwidth": "unlimited",
        "support": "24/7"
    },
    {
        "id": 2,
        "special": "special",
        "type": "popular",
        "price": 60,
        "yearPrice": 630,
        "memory": "512MB",
        "user": 3,
        "website": 5,
        "domain": 7,
        "bandwidth": "unlimited",
        "support": "24/7"
    },
    {
        "id": 3,
        "special": "",
        "type": "premier",
        "price": 90,
        "yearPrice": 950,
        "memory": "1024MB",
        "user": 5,
        "website": 10,
        "domain": 10,
        "bandwidth": "unlimited",
        "support": "24/7"
    }
]


const container = document.querySelector('.main-container');
const backContainer = document.querySelector('.back-container');
const changeButton = document.querySelector('.clicked');
const changeType = document.querySelector('.switch');




// changeButton.addEventListener("click",function(){
//     console.log("sup")
//     changeType.classList.toggle("switched");
// })

// const cards = document.querySelector('.card');
// changeButton.addEventListener('click',function(){

//      cards.forEach( function(card){
//          card.classList.toggle("is-flipped")
//      } )
// })


//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(Monthlyplans);
  });



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="grid-container  ${item.special}" id="${item.id}>
            <div class="card">
                <div class="card__face card__face--fron">
                    <div class="top-info">
                        <h2 class="type">${item.type}</h2>
                        <h1 class="price">$${item.price}/MO</h1>
                    </div>
                    <p class="memory"><span>${item.memory}</span> memory</p>
                    <p class="user"><span>${item.user}</span> user</p>
                    <p class="website"><span>${item.website}</span> website</p>
                    <p class="domain"><span>${item.domain}</span> domain</p>
                    <p class="bandwidth"><span>${item.bandwidth}</span> bandwidth</p>
                    <div class="bottom-info">
                        <p class="support"><span>${item.support}</span> support</p>
                        <button class="btn-select">select</button>
                    </div>
                </div>      
                <div class="card__face card__face--back">
                    <div class="top-info">
                        <h2 class="type">${item.type}</h2>
                        <h1 class="price">$${item.yearPrice}/YR</h1>
                    </div>
                    <p class="memory"><span>${item.memory}</span> memory</p>
                    <p class="user"><span>${item.user}</span> user</p>
                    <p class="website"><span>${item.website}</span> website</p>
                    <p class="domain"><span>${item.domain}</span> domain</p>
                    <p class="bandwidth"><span>${item.bandwidth}</span> bandwidth</p>
                    <div class="bottom-info">
                        <p class="support"><span>${item.support}</span> support</p>
                        <button class="btn-select">select</button>
                    </div>
                </div>
            </div>
        </article>
        
        `
    }).join("");
    container.innerHTML = displayMenu;
}

    
