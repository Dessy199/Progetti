var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');

const apiKey = '94096234cce8e745e66ae33d96189024';

button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + apiKey + '&units=metric&lang=it')
    .then(response => response.json())
    .then(data => {
  
      var valoreTemp = data.main.temp;
      var valoreNomecitta = data.name;
      var valoreDesc = data.weather[0].description;

      main.innerHTML =valoreNomecitta;
      desc.innerHTML = valoreDesc;
      temp.innerHTML = "Temp: " + valoreTemp + "°C";
      input.value = "";
      console.log(data);
    })

    .catch(err => alert("CITTA INESISTENTE!"));
})



