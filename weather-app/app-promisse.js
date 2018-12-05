const yargs = require("yargs");
const axios = require("axios");

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyALWVk-KCn4-uKJ0zM_u9i0eMsmwj9kajg`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS")
      throw new Error("Unable to find that address");
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/e396524d2971e6b2cb21e406c16df516/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(response => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Temperature : ${temperature}. It feels like ${apparentTemperature}`);
  })
  .catch(error => {
    if (error.code == "ENOTFOUND") console.error("Unable to connect to APIs");
    else console.error(error.message);
  });
