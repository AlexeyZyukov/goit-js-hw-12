'use strict'

const input = document.querySelector('#text-input');
const result = document.querySelector('.input-data');
const countryList = document.querySelector('.container');
// let countryName = "";
let countryArrayLength = null;

console.log(input.value);

input.addEventListener('input', onInputSearch);
//console.log(countryArrayLength);
// countryList.insertAdjacentElement('beforeend',)

function onInputSearch() {
     const countryName = input.value;
     console.log(countryName);
     //fetchCountryByName(countryName).then(createSingleCountryCard);
     fetchCountryByName(countryName).then(onSuccessFetch);
     console.log(fetchCountryByName(countryName))
};
// // fetchCountryByName('Rus').then(onSuccessFetch);

function fetchCountryByName(name) {
     return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then(response => response.json())
          // .catch(err => console.log(err));
};
// console.log(fetchCountryByName());

function createSingleCountryCard(obj) {
     return obj.map(countryName => {
         return `<li>${countryName.name}</li>`
     }).join('');     
};

function onSuccessFetch(country) {
     createSingleCountryCard(country);
     //console.log(country);
}




// function createSingleCountryCard(countryName) {
//      const singleCountryCard = `<li>${countryName.name}</li>`;
//      countryList.innerHTML = singleCountryCard;
// };
// function error(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

//countryList.insertAdjacentHTML('beforeend', createSingleCountryCard);
        



