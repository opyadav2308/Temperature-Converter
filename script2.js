// Script
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Function to add a loading feature to the button
function addLoadingFeature() {
    convertBtn.innerHTML = "<span class='icon'> <i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    convertBtn.setAttribute("disabled", "true");

    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
        convertBtn.removeAttribute("disabled");
    }, 1000);
}

// window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    addLoadingFeature();
});

// Function to convert and display the temperature
function convertToCelsius() {
    let inputValue = parseFloat(degree.value);

    if (isNaN(inputValue)) {
        celsiusField.innerHTML = "Please enter a valid temperature";
        return; // Exit the function early if the input is not valid
    }

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) / 1.8;
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(2)} &deg;C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(2)} &deg;C`;
        }
    }, 1100);
}
