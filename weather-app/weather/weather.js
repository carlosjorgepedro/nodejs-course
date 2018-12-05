const request = require("request");

var getWeather = (latitude, longitude, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/e396524d2971e6b2cb21e406c16df516/${latitude},${longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to connect to Forecast.io Servers");
      }
    }
  );
};

module.exports = {
  getWeather
};
