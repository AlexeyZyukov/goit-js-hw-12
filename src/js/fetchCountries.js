

const input = document.querySelector('#text-input')
const result = document.querySelector('.input-data')
let countryName = ""
console.log(countryName);

input.value = 'test'

console.log(result);
function onInputSearch(event) {
     countryName = input.value;
     console.log(countryName);
}
fetch(`https://restcountries.eu/rest/name/${countryName}`)
     .then(console.log(countryName))
     .then(response => response.json())
    .then(response => console.log(response))
    .then(data => console.log(data))
     .catch(err => console.log(err));
    
input.addEventListener('input', onInputSearch);



// function createCountryCard() {
     
// }