module.exports = {
    metersToKilometers: function (meters) {
        if (typeof meters !== "number" || meters < 0) {
            throw new Error("Input must be a non-negative number.");
        }
        return meters / 1000;
    },

    celsiusToFahrenheit: function (celsius) {
        if (typeof celsius !== "number") {
            throw new Error("Input must be a number.");
        }
        return (celsius * 9) / 5 + 32;
    },

    kilogramsToPounds: function (kilograms) {
        if (typeof kilograms !== "number" || kilograms < 0) {
            throw new Error("Input must be a non-negative number.");
        }
        return kilograms * 2.20462;
    },

    
};
