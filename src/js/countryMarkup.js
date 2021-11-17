'use strict'
export { createCountryList, createSingleCountryCard };

function createCountryList(obj) { //разметка 1 строки с именем страны, если результат поиска >1, <10
     return obj.map(objName => {
          // console.dir(objName);
          return `<li class="country_single">
          <span class="country_item">Country: </span> <span class="country_name">${objName.name}</span></li>`
     }).join('');
};

function createSingleCountryCard(obj) { //разметка 1 карточки с данными страны
     return obj.map(objName => {
          return `<h2 class="country__title-name">${objName.name}</h2>
          <div class="country__box">
               <div class="country__content">
                    <p class="country__text">
                         <span>Capital:</span> ${objName.capital}
                    </p>
                    <p class="country__text">
                         <span>Population:</span> ${objName.population}
                    </p>
                    <p class="country__text">
                    <span>Languages:</span>
     
                    <ul class="country__languages-list">
                    ${objName.languages.map(language => //перебор массива внутри массива
               `<li>${language.name}</li>`
          ).join("")}
                    </ul> 
                    </p>
               </div>
               <img src="${objName.flag}" alt="${objName.demonym}" class="country__img" >
          </div>`
     }).join('');
};