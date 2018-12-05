request = require("request");

const geocodeAddress = (address, callback) => {
  var encodedUri = encodeURIComponent(address);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}&key=AIzaSyALWVk-KCn4-uKJ0zM_u9i0eMsmwj9kajg`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Google Servers.");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find address");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
