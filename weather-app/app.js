const yargs = require("yargs");
const request = require("request");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResult) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log( `It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}!`);
        }
      }
    );   
  }
});
