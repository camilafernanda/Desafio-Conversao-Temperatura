var temperaturaCelsius = 35;

// Converte a temperatura para Fahrenheit e Kelvin
var temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
var temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;

// Exibe os resultados em uma janela de alerta
alert("Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + " °F\n" + "Temperatura em Kelvin: " + temperaturaKelvin.toFixed(2) + " K");