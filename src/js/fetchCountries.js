'use strict'

const input = document.querySelector('#text-input');
const result = document.querySelector('.input-data');
const countryList = document.querySelector('.container');
// let countryName = "";
let countryArrayLength = null;

console.log(input.value);

input.addEventListener('input', onInputSearch);
//console.log(countryArrayLength);


function onInputSearch() {
     
     setTimeout(() => {
          const countryName = input.value;
          console.log(countryName);
          fetchCountryByName(countryName).then(onSuccessFetch);
          console.log(fetchCountryByName(countryName));
     }, 1000)     
};

function fetchCountryByName(name) {
     return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then(response => response.json())
          // .catch(err => console.log(err));
};
//console.log(fetchCountryByName()); //вернет Promise (pending) как синхронная функция сообщнеие "Not found"

function onSuccessFetch(country) {
     const markup = createSingleCountryCard(country);
     countryList.insertAdjacentHTML('beforeend', markup);
     //console.log(country);
};

function createSingleCountryCard(obj) { //разметка 1 строки с именем страны
     return obj.map(countryName => {
          return `<li>${countryName.name}</li>`
     }).join('');
};




// function createSingleCountryCard(countryName) {
//      const singleCountryCard = `<li>${countryName.name}</li>`;
//      countryList.innerHTML = singleCountryCard;
// };
// function error(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

//countryList.insertAdjacentHTML('beforeend', createSingleCountryCard);
        



