'use strict'

const input = document.querySelector('#text-input');
const result = document.querySelector('.input-data');
const countryList = document.querySelector('.container');
// let countryName = "";
let countryArrayLength = null;

input.addEventListener('input', onInputSearch);
//console.log(countryArrayLength);


// function onInputSearch() {
//      countryName = input.value;
//      const countryList = fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//           .then((response) => response.json())
//           .then(json => {
//                console.log(json);
//                countryArrayLength = json.length;
//                callbackFn(countryArrayLength);
//                console.log(countryArrayLength);
               
//         //Once succcessful callback return you can find length of number of item
//                return countryArrayLength;
//           })
//           .catch(err => console.log(err));
//      return countryList;
// }
// // const resultOfSearch = onInputSearch();
// // console.log(resultOfSearch);

// function callbackFn(data) {
//      console.log(data);
// }
// callbackFn();

function onInputSearch() {
     const countryName = input.value;
     fetchCountriesList(countryName);
}

function fetchCountriesList(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then(response => response.json())
          .then(json => {
               console.log(json);
               countryArrayLength = json.length;
               console.log(countryArrayLength);
        //Once succcessful callback return you can find length of number of item
               return countryArrayLength;
          })
          .then(result => createSingleCountryCard(result))
          //.then(result => console.log(result))
          .catch(err => console.log(err));
}

function createSingleCountryCard(obj) {
     const countryCard = `<li>${obj.name}</li>`;
     countryList.insertAdjacentHTML('beforeend', countryCard);
};

