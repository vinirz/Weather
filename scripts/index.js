const btn = document.querySelectorAll('button')
const city = document.getElementById('city_text')
const country = document.getElementById('city_sub')
const temp = document.getElementById('tempr')
const st = document.getElementById('st')
const max = document.getElementById('max')
const min = document.getElementById('min')
const umid = document.getElementById('umid')
const press = document.getElementById('press')


btn.forEach(element => {
    element.addEventListener('click', () => {
        
        btn.forEach(element => {
            element.classList.remove('active')
        });
        
        element.classList.toggle('active')
    })
});

function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=5b12c9a642ebf7a36f0ff73ea5bce5c2`;  
        
      fetch(url).then(function(response) {
        response.json().then(function(data) {
            city.innerText = data.name
            country.innerText = data.sys.country
            temp.innerText = Math.round(data.main.temp) + "°C"
            st.innerText = st.innerText + " " + data.main.feels_like + "°C"
            max.innerText = max.innerText + " " + data.main.temp_max + "°C"
            min.innerText = min.innerText + " " + data.main.temp_min + "°C"
            umid.innerText = umid.innerText + " " + data.main.humidity + "%"
            press.innerText = press.innerText + " " + data.main.pressure + "hPa"
        });
      }).catch(function(err) {
        console.error('Failed retrieving information', err);
      });
      
    });
}

getUserPosition();
console.log('KNGS DEVELOPMENT👑')