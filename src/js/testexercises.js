"use strict";

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(resp => resp.json())
//      .then(resp => console.log(resp))
//      .then(resp => console.log(commits));
     //.then(commits => console.log(commits[0].author.login))
  

// fetch('https://jsonplaceholder.typicode.com/todos')
     fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
        //below method return promise based response by converting stream object to json
        return response.json();
    })
     .then(json => {
        //Once succcessful callback return you can find length of number of item
        console.log(json);
        console.log(json.length)
    })