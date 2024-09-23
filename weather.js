const apiKey = "485cc14f2957a0974946a5da8bdf14c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".navbar input");
const searchBtn = document.querySelector(".navbar button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp-text").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".text1").innerHTML = data.main.humidity + "%";
    document.querySelector(".text2").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}


searchBtn.addEventListener("click", () =>{
    checkweather(searchBox.value);
})

