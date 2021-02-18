fetch('http://localhost:3000/shortcuts')
    .then(response => response.json())
    .then(data=>console.log(data))