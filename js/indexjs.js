var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);

var addressId = "address-name";
var addressEl = document.getElementById(addressId);

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);

var hobbiesNameId = "hobbies-name";
var hobbiesNameEl = document.getElementById(hobbiesNameId);

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);

debugger;

function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value); 
    console.log(citiesEl.value);   
}

alertValue();

alertValue();

firstNameEl.setAttribute("value", "Andrey");
// lastNameEl.setAttribute("value", "kamasutra");

lastNameEl.className = "last-name-input default-input error-input";

alertValue();

citiesEl.value = "Minsk";

avatarWrapperEl.innerHTML = "<ul><li>1</li><li>2</li></ul>";
