
function alertValues(elementParameter) {
    debugger;
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
//alertFirstNameValues();
alertValues(firstNameEl);

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
//alertFirstNameValues();
alertValues(lastNameEl);

var addressId = "address";
var addressEl = document.getElementById(addressId);
//alertaddressValues();
alertValues(addressEl);

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
//alertcitiesValues();
alertValues(citiesEl);

var hobbiesNameId = "hobbies-name";
var hobbiesNameEl = document.getElementById(hobbiesNameId);

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);

firstNameEl.value="Andrey";
console.log(firstNameEl.value);
console.log(firstNameEl.className);

lastNameEl.className = "last-name-input default-input error-input";
console.log(lastNameEl.value);
console.log(lastNameEl.className);

lastNameEl.title="Wrong last name";
console.log(lastNameEl.value);
console.log(lastNameEl.className);

firstNameEl.className = 'new-class';
console.log(firstNameEl.value);
console.log(firstNameEl.className);

citiesEl.value = "Minsk";

avatarWrapperEl.innerHTML = "<ul><li>1</li><li>2</li></ul>";
