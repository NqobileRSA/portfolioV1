// creating a constant variable for the custom api key from the open source weather application
const apikey = "bf475a5f951975e912fa1e75b815b854";
// creating a variable for unsplash api
const unsplashAPI = "5mPWrFNXhB0FAN76fbWwXX258WqfAbVedfWhiaaF74w";

// getting elements from the DOM and assigning them to variables
const weatherDataElement = document.getElementById("weather-data");
const cityInputElement = document.getElementById("city-input");
const formElement = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
const backgroundImage = document.getElementById("background");
const newImage = document.getElementById("backgroundImage")



// adding an event lister on the form submit button
formElement.addEventListener('submit', (event) => {
    // prevent page from refreshing onpress
    event.preventDefault();
    // assigning user input to a different to avariable
    const cityValue = cityInputElement.value;
    // executing the get weather function with cityValue as a parameter
    getWeatherData(cityValue);
    dynamicBackground(cityValue);  
})

// declaring async function because we need a delay to retrieve data from an api
async function getWeatherData(cityValue) {
    // using try to attempt retrieving data
    try {
        // retrieving data and assigning it to a variable
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        // condition if fetch doesn't retrieve data
        if (!response.ok) {
            // error to appear if response is not ok
            throw new Error("Network response was not ok")
        }
        // assigning json response to a variable
        const data = await response.json();
        console.log(data);
        // assigning seperate data sets from the json to seperate variables
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ];
        // placing the seaperate data sets from the json data set on the DOM
        weatherDataElement.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataElement.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataElement.querySelector(".discription").textContent = description;

        weatherDataElement.querySelector(".details").innerHTML = details.map((details) =>
            `<div>${details}</div>`).join("");
            errorMessage.style.scale = "0";

    } catch (error) {
        // conditions to appear when data was not retrieved successfuly from api and an error message
        weatherDataElement.querySelector(".icon").innerHTML = "";
        weatherDataElement.querySelector(".temperature").textContent = "";
        weatherDataElement.querySelector(".discription").textContent = "";
        weatherDataElement.querySelector(".details").innerHTML = "";
        errorMessage.style.scale = "1";

    }
}
//background image async function 
async function dynamicBackground(cityValue){
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${cityValue}%20city&client_id=5mPWrFNXhB0FAN76fbWwXX258WqfAbVedfWhiaaF74w`)
        if (!response.ok) {
            throw new Error('no image')
        }
        const data = await response.json();
        console.log(data)
        const image = data.results[0].urls.full;
        newImage.setAttribute("src", image);
        newImage.setAttribute("height", "100%")
        newImage.setAttribute("width", "100%")
        backgroundImage.appendChild(newImage)

    } catch (error) {

    }
}