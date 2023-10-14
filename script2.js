// Script
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

if (degree.value === "") {
    convertBtn.setAttribute("disabled", "");
    setTimeout(() => {
        convertBtn.removeAttribute("disabled");
    }, 4000);
}

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // add loading feature 
    convertBtn.innerHTML = "<span class='icon'> <i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000)
});

// add loading

function convertToCelsius() {
    let inputValue = degree.Value;

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; c`;
        }
        else if (tempType.value === "Kelvin") {
            const KelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `&{kelvinToCelsius.toFixed(3)} &deg;c`;
        }
    }, 1100)
}