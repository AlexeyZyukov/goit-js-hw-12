'use strict'
import { alert, error } from '@pnotify/core';
import refs from './refs/refs.js';
import { createCountryList, createSingleCountryCard } from './countryMarkup.js'
const debounce = require('lodash.debounce');


refs.input.addEventListener('input', debounce(onInputSearch, 1000));
refs.input.addEventListener('focus', onFocusAction, 'once');

let fetchCountryByName = (name) => {
     try {
          return fetch(`https://restcountries.com/v2/name/${name}`)
               .then(response => {
                    console.dir(response);
                    return response.json()
               })
     } catch (error) {
          return console.log(error);
     }
};

let onSuccessFetchCountryMarkup = (country) => {
     try {
          console.dir(country);
          workWithSessionStorage(country);
          // console.log(country.length); //country - массив стран, имеет св-во length
          // console.log(country.status); // to show "response.status"
          renderCountries();
     } catch (error) {
          error => console.log(error)
     }
};

function onInputSearch() {
     const countryName = refs.input.value;
     console.log('this is a ', this);
     // console.log(countryName);
     fetchCountryByName(countryName)
          .then(onSuccessFetchCountryMarkup)
     // console.log(fetchCountryByName(countryName));

};

// function fetchCountryByName(name) {
//      return fetch(`https://restcountries.com/v2/name/${name}`)
//           // return fetch(`https://restcountries.com/v3.1/name/${name}`)

//           .then(response => {
//                console.dir(response)
//                // // в промисе после вызова console.log(response.json()) передать данные дальше нельзя.
//                return response.json()
//           })
//           .catch(error => console.log(error))
// };

// function onSuccessFetchCountryMarkup(country) {
//      console.dir(country);
//      workWithSessionStorage(country);
//      // console.log(country.length); //country - массив стран, имеет св-во length
//      // console.log(country.status); // to show "response.status"
//      renderCountries();
// };

function workWithSessionStorage(array) {
     sessionStorage.setItem('country', JSON.stringify(array));
};
function renderCountries() {
     // let result = sessionStorage.getItem('country')
     let array = JSON.parse(sessionStorage.getItem('country'));

     if (array.length >= 2 && array.length <= 20) {
          clearContent();
          refs.countryList.insertAdjacentHTML('beforeend', `${createCountryList(array)}`);
          // console.dir(refs.countryList.textContent);
     }
     if (array.length === 1) {
          clearContent()
          const singleMarkup = createSingleCountryCard(array);
          refs.countryList.innerHTML = singleMarkup;
     }
     if (array.length > 20) {
          clearContent();
          alert({
               text: 'Слишком много совпадений. Уточните название страны',
               styling: 'brighttheme',
               delay: 2000,
          });
     }
     if (array.status === 404) {
          error({
               text: 'Проверьте правильность ввода названия страны',
               styling: 'brighttheme',
               delay: 2000,
          })
     }
     return;
};

function clearContent() {
     refs.result.innerHTML = "";
     refs.countryList.innerHTML = '';
};

function onFocusAction(event) {
     event.preventDefault();
     onClickAction();
     console.log('this is a ', this);
}

function onClickAction() {
     refs.countryList.addEventListener('click', (event) => {
          console.dir(event.target);
          if (!event.target.matches('.country_name') || !event.target.closest('.country-container'))
               return;
          const countryName = event.target.textContent;
          fetchCountryByName(countryName)
               .then(onSuccessFetchCountryMarkup)
     });
}

// function getInfoFromArray(array) {
//      console.log(array);
//      let result = array.map(item => item.name);
//      console.log('item.names: ', result);
//      // });
//      // console.log(arrayItem);
//      // return arrayItem;
// }

// function clickAction(event) {
//      console.dir(event.target);
//      if (!event.target.matches('.country_name') || !event.target.closest('.country-container')) return;
//      refs.input.value = event.target.textContent;
//      console.log(event.target.textContent);
// }
//логика действий - получить кол-во стран в списке и их кол-во через length, получить индекс i выбранного/нажатого объекта через document.querySelectorAll('.country_name') - даст перечень объектов NodeList со св-вом length, получить название страны из countryName[i].innerHTML, передать название страны в формирование разметки.
// function clickAction(event) {
// console.log('event.target: ', event.target);
// if (!event.target.closest('.country-container'))
//      return;
// // console.log('Hi');
// console.dir(event.target);

// let countryName = document.querySelectorAll('.country_name'); // перечень объектов NodeList со св-вом length
// console.log(countryName.values());
// console.log(countryName.length);
// console.log(countryName[1].innerHTML);

// let countryNameByClassName = document.getElementsByClassName('country_name');
// console.dir(countryNameByClassName);
// console.log(countryNameByClassName[3].innerHTML);
// }
// //=======реализация клика по стране из списка для получения информации о ней========
// refs.countryList.addEventListener('click', event => {
//      let target = event.target.lastChild.innerText;
//      clearContent();
//      input.value = target;
//      onInputSearch();
//      input.value = ""

//      console.dir(target);
//      console.dir(event.target);
//      console.dir(event.target.lastChild);
//      console.dir(event.target.lastChild.nodeValue);
//      // if (event.target.tagName === 'LI' || event.target.tagName === 'B' || event.target.tagName === 'SPAN') {
//      //      let target = event.target.lastChild.innerText;
//      //      console.dir(event.target.tagName);
//      //      clearContent();

//      //      console.dir(target);
//      //      console.dir(event.target);
//      //      input.value = target;
//      //      onInputSearch();
//      //      input.value = ""
//      // } else {
//      //      return;
//      // }
// });

// function createCountryList(obj) { //разметка 1 строки с именем страны
//      return obj.map(objName => {
//           console.dir(objName);
//           return `<li class="country_name">
//           <span><b>Country: </b></span> <span class="country_selected">${objName.name}</span></li>`
//      }).join('');
// };

// function createSingleCountryCard(obj) { //разметка 1 карточки с данными страны
//      return obj.map(objName => {
//           return `<h2 class="country__title-name">${objName.name}</h2>
//           <div class="country__box">
//                <div class="country__content">
//                     <p class="country__text">
//                          <span>Capital:</span> ${objName.capital}
//                     </p>
//                     <p class="country__text">
//                          <span>Population:</span> ${objName.population}
//                     </p>
//                     <p class="country__text">
//                     <span>Languages:</span>

//                     <ul class="country__languages-list">
//                     ${objName.languages.map(language => //перебор массива внутри массива
//                `<li>${language.name}</li>`
//           ).join("")}
//                     </ul> 
//                     </p>
//                </div>
//                <img src="${objName.flag}" alt="${objName.demonym}" class="country__img" >
//           </div>`
//      }).join('');
// };