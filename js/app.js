/** 
 * Var Selectors 
*/
const gallery = document.getElementById('gallery');
const testZone = document.getElementById('test');
let moduleHTML = [];

/** 
 * Fetch protocols 
*/
fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then((data) => {generateEmployees(data.results);
    })
  
/** 
 * functions
*/
function generateEmployees(data) {
    let html;
    /** 
    * employees small cards
    */
    data.map(item =>
        html += ` 
            <div class="card" id="${item.name.first}">
                <div class="card-img-container">
                    <img class="card-img" src="${item.picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                    <p class="card-text">${item.email}</p>
                    <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
                </div>    
            </div>
                `);

    /** 
    * employees module cards
    */
    data.map(modItem =>
        //let birthday = item.dob.date.slice(0,9); 
        moduleHTML += `{${modItem.name.first} : 
            
            <div class="modal-container" id="${modItem.name.first}">
                        <div class="modal">
                            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                            <div class="modal-info-container">
                                <img class="modal-img" src="${modItem.picture.large}" alt="profile picture ${modItem.name.last}">
                                <h3 id="name" class="modal-name cap">${modItem.name.first} ${modItem.name.last}</h3>
                                <p class="modal-text">${modItem.email}</p>
                                <p class="modal-text cap">${modItem.location.city}</p>
                                <hr>
                                <p class="modal-text">${modItem.phone}</p>
                                <p class="modal-text">${modItem.location.street.number} ${modItem.location.street.name}, ${modItem.location.city}, ${modItem.location.state} ${modItem.location.postcode}</p>
                                <p class="modal-text">Birthday: ${modItem.dob.date.slice(0,9)}</p>
                            </div>
                        </div>
                        }, `);
        

    gallery.innerHTML = html;  
}


/** 
 * 
*/
let cards = document.getElementsByClassName('card');
gallery.addEventListener('click', (e) => {
    let eTarget = e.target;
    for (let i=0; i<cards.length; i++){
        if(eTarget === cards[i]){
        console.log("clicked");
        }
    }
});