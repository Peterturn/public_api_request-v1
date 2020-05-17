/** 
 * Var Selectors 
 */
const gallery = document.getElementById('gallery');
const testZone = document.getElementById('test');
let employeeArr = [];

/** 
 * Fetch protocols 
 */
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then((data) => {
        employeeArr.push(data.results);
        generateEmployees(data.results);
        eListener(data);
    })

/** 
 * functions
 */
function generateEmployees(data) {
    /** 
     * employees small cards
     */
    let html = '';
    data.map(item =>
        html += ` 
            <div class="card" id="${item.name.first}">
                <div class="card-img-container">
                    <img class="card-img" src="${item.picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                    <p class="card-text">${item.email}</p>
                    <p class="card-text cap">${item.location.city}</p>
                </div>    
            </div>
                `);

    gallery.innerHTML = html;


}


/** 
 * employees module cards
 */







/** 
 * 
 */

//----- TEST CODE -----//
function eListener(data) {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', event => {
            //-----Test Code Start-----//
            let moduleHTML = '';
            moduleHTML += ` 
           
           <div class="modal-container" id="bigBox">
                       <div class="modal">
                           <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                           <div class="modal-info-container">
                               <img class="modal-img" src="${employeeArr[0][i].picture.large}" alt="profile picture ${employeeArr[0][i].name.last}">
                               <h3 id="name" class="modal-name cap">${employeeArr[0][i].name.first} ${employeeArr[0][i].name.last}</h3>
                               <p cla="modal-text">${employeeArr[0][i].email}</p>
                               <p class="modal-text cap">${employeeArr[0][i].location.city}</p>
                               <hr>
                               <p class="modal-text">${employeeArr[0][i].phone}</p>
                               <p class="modal-text">${employeeArr[0][i].location.street.number} ${employeeArr[0][i].location.street.name}, ${employeeArr[0][i].location.city}, ${employeeArr[0][i].location.state} ${employeeArr[0][i].location.postcode}</p>
                               <p class="modal-text">Birthday: ${employeeArr[0][i].dob.date.slice(0,9)}</p>
                           </div>
                       </div>
                       `;
                       gallery.innerHTML += moduleHTML;
            //-----Test Code End-----//
            console.log(employeeArr[0][i]);
        });
    }
    document.getElementById('bigBox').addEventListener('click', (e)=>{
        let xBTN = document.getElementById('modal-close-btn');
        let bigBox = document.getElementById('bigBox');
        console.log(e.target);
        
        if(e.target === xBTN){
        bigBox.style.display= 'none'; 
        }
    })
}