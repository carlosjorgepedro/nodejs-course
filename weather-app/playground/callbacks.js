var getUser = (id, callback) => {
  var user = {
    id,
    name: "Carlos"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(33, data => {
  console.log(data);
});


let mapsApiUrl = 'https://maps.googleapis.com/maps/api/json?key=AIzaSyArxfGLh7sOrCAzeXAASeWqqrFm6IBJm14'