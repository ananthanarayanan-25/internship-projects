// Simple Weather App JavaScript
// This code uses basic .then() promises (no async/await)

// OpenWeatherMap API key
var apiKey = "4c8a993eaa746d667e1cf33f3c86eecd";

// Function to get weather data
function getWeather() {
    // Get the city name from input box
    var cityName = document.getElementById("cityInput").value;

    // Check if user entered something
    if (cityName === "") {
        showError("Please enter a city name!");
        return;
    }

    // Clear previous error messages
    clearError();

    // Create the API URL
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";

    // Fetch data from API
    fetch(url)
        .then(function(response) {
            // Check if response is OK (status 200)
            if (!response.ok) {
                throw new Error("City not found!");
            }
            // Convert response to JSON format
            return response.json();
        })
        .then(function(data) {
            // If successful, display the weather data
            displayWeather(data);
        })
        .catch(function(error) {
            // If there's an error, show error message
            showError(error.message);
        });
}

// Function to display weather on the page
function displayWeather(data) {
    // Extract data from API response
    var city = data.name;
    var temperature = Math.round(data.main.temp);
    var description = data.weather[0].main;
    var humidity = data.main.humidity;

    // Update HTML elements with weather data
    document.getElementById("cityName").innerText = city;
    document.getElementById("temperature").innerText = temperature + "°C";
    document.getElementById("description").innerText = description;
    document.getElementById("humidity").innerText = humidity + "%";

    // Show the weather result section
    document.getElementById("weatherResult").classList.add("show");
}

// Function to show error message
function showError(message) {
    var errorDiv = document.getElementById("errorMessage");
    errorDiv.innerText = message;
    errorDiv.classList.add("show");

    // Hide weather result if there's an error
    document.getElementById("weatherResult").classList.remove("show");
}

// Function to clear error message
function clearError() {
    var errorDiv = document.getElementById("errorMessage");
    errorDiv.innerText = "";
    errorDiv.classList.remove("show");
}

// Function to allow Enter key to search
function handleEnter(event) {
    // Check if Enter key was pressed
    if (event.key === "Enter") {
        getWeather();
    }
}
