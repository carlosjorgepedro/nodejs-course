const request = require("request");

var requestWeather = address => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURI(address);

    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyALWVk-KCn4-uKJ0zM_u9i0eMsmwj9kajg`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("Unable to connect to Google Servers.");
        } else if (body.status === "ZERO_RESULTS") {
          reject("Unable to find address");
        } else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      }
    );
  });
};

requestWeather("SE10 9NR")
  .then(value => console.log(JSON.stringify(value)))
  .catch(error => console.error(error));
