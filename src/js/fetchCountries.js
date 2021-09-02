'use strict'
const debounce = require('lodash.debounce');

const input = document.querySelector('#text-input');
const result = document.querySelector('.input-data');
const countryList = document.querySelector('.container');


input.addEventListener('input', debounce(onInputSearch, 1000));

function onInputSearch() {
          const countryName = input.value;
          console.log(countryName);
          fetchCountryByName(countryName).then(onSuccessFetch);
          console.log(fetchCountryByName(countryName));     
};

function fetchCountryByName(name) {
     return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then(response => response.json())
          // .catch(err => console.log(err));
};
//console.log(fetchCountryByName()); //вернет Promise (pending) как синхронная функция сообщнеие "Not found"

function onSuccessFetch(country) { 
     console.log(country.length); //country - массив стран, имеет св-во length

     if (country.length === 1) {
          clearContent();
          const singleMarkup = createSingleCountryCard(country);
          countryList.insertAdjacentHTML('beforeend', singleMarkup);
     }
     if (country.length >= 2 && country.length <= 10) {
          clearContent();
          const markup = createCountryList(country);
          countryList.insertAdjacentHTML('beforeend', markup);
     }
     //console.log(country);
};

function clearContent() {
     input.value = "";
     result.innerHTML = "";
     countryList.innerHTML = '';
};

function createCountryList(obj) { //разметка 1 строки с именем страны
     return obj.map(countryName => {
          return `<li class="country_name"><span><b>Country: </b></span>${countryName.name}</li>`
     }).join('');
};

function createSingleCountryCard(obj) { //разметка 1 карточки с данными страны
     return obj.map(countryName => {
          return `<h2 class="country__title-name">${countryName.name}</h2>
          <div class="country__box">
               <div class="country__content">
                    <p class="country__text">
                         <span>Capital:</span> ${countryName.capital}
                    </p>
                    <p class="country__text">
                         <span>Population:</span> ${countryName.population}
                    </p>
                    <p class="country__text">
                    <span>Languages:</span>
     
                    <ul class="country__languages-list">
                    ${countryName.languages.map(language => //перебор массива внутри массива
                         `<li>${language.name}</li>`
                    ).join("")}
                    </ul> 
                    </p>
               </div>
               <img src="${countryName.flag}" alt="${countryName.demonym}" class="country__img" width=300>
          </div>`
     }).join('');
};


     

// function createSingleCountryCard(obj) {
     
// }




// function createCountryList(countryName) {
//      const singleCountryCard = `<li>${countryName.name}</li>`;
//      countryList.innerHTML = singleCountryCard;
// };
// function error(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

//countryList.insertAdjacentHTML('beforeend', createCountryList);
        



