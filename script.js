const apiKey = "c755fecc28cd1cb7c56368139ee8dc79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcons = document.querySelector(".weather-icon");

async function checkWeather(cityname){
    const response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".invalidity").style.display = "block";
        document.querySelector(".weather-section").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcons.src = "images/clouds.webp";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcons.src = "images/clear.webp";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcons.src = "images/rainy.webp";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcons.src = "images/storm.webp";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcons.src = "images/mist.webp";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcons.src = "images/snow.webp";
        }

        document.querySelector(".weather-section").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})