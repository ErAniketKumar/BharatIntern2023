document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitOutput.textContent = fahrenheit.toFixed(2);
        } else {
            fahrenheitOutput.textContent = "--";
        }
    });
});
