const request = require("request");


const fetchCatBreed = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error,response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);

    if (data.length > 0) {
      callback(null, data[0].description);
    } else {
      callback(new Error("Breed not found"), null);
    }
  });
};

module.exports = { fetchCatBreed };