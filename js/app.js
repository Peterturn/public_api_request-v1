/** 
 * Var Selectors 
*/
const gallery = document.getElementById('gallery');
const testZone = document.getElementById('test');

/** 
 * Fetch protocols 
*/

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(data => generateEmployees(data.results))
  .then(data => generateEmployeeCard(data))
  //.then(data => console.log(data.results))
  
/** 
 * functions
*/
function generateEmployees(data) {
    let html;
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

    gallery.innerHTML = html;
}

function generateEmployeeCard(data) {
    let html;
    let birthday = data[0].dob.date.slice(0,9);
    html += ` 
    <div class="modal-container" id="${data[0].name.first}">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${data[0].picture.large}" alt="profile picture ${data[0].name.last}">
                        <h3 id="name" class="modal-name cap">${data[0].name.first} ${data[0].name.last}</h3>
                        <p class="modal-text">${data[0].email}</p>
                        <p class="modal-text cap">${data[0].location.city}</p>
                        <hr>
                        <p class="modal-text">${data[0].phone}</p>
                        <p class="modal-text">${data[0].location.street.number} ${data[0].location.street.name}, ${data[0].location.city}, ${data[0].location.state} ${data[0].location.postcode}</p>
                        <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
                </div>

                `;

    testZone.innerHTML = html;
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
  