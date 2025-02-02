const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let isCelsius = true; // Default unit is Celsius
let tempCelsius; // Store the original Celsius temperature

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to update the temperature display
function updateTemperatureDisplay(tempElement) {
    if (isCelsius) {
        tempElement.innerText = `${tempCelsius.toFixed(2)} °C`;
    } else {
        const tempFahrenheit = convertCelsiusToFahrenheit(tempCelsius);
        tempElement.innerText = `${tempFahrenheit.toFixed(2)} °F`;
    }
}

// Initially setting the active tab
let oldTab = userTab;
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if (newTab !== oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => switchTab(userTab));
searchTab.addEventListener("click", () => switchTab(searchTab));

// Check if coordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => {
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(response.data);
        })
        .catch(err => {
            loadingScreen.classList.remove("active");
            console.error(err);
        });
}

function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    tempCelsius = weatherInfo?.main?.temp; // Store the original Celsius temperature
    updateTemperatureDisplay(temp); // Update temperature display

    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

// Event listener for the temperature toggle button
document.getElementById("toggleUnit").addEventListener("click", () => {
    isCelsius = !isCelsius; // Toggle unit
    const toggleButton = document.getElementById("toggleUnit");
    toggleButton.innerText = isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius";

    const tempElement = document.querySelector("[data-temp]");
    updateTemperatureDisplay(tempElement);
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value.trim();

    if (cityName !== "") {
        fetchSearchWeatherInfo(cityName);
    }
});

function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(response.data);
            clearError(); // Clear the error message if the city is valid
        })
        .catch(err => {
            loadingScreen.classList.remove("active");
            showError("City not found");
            console.error(err);
        });
}

function showError(message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = message;

    // Clear any previous error messages
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

    // Insert the error message below the input field
    searchInput.insertAdjacentElement("afterend", errorMessage);
}

function clearError() {
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }
}