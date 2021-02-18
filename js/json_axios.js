
const axios = require("axios");
axios.get('http://localhost:3000/shortcuts')
    .then(function (response){
        console.log(response)
    })