const unitConverter = require('./index');

try {    
    console.log("1000 meters in kilometers:", unitConverter.metersToKilometers(1000)); // 1
    console.log("25 Celsius in Fahrenheit:", unitConverter.celsiusToFahrenheit(25)); // 77
    console.log("50 kilograms in pounds:", unitConverter.kilogramsToPounds(50)); // 110.231
    }
    catch (error) {
    console.error("Error:", error.message);
}
