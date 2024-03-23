const request = require("request");
const args = process.argv.slice(2);


const fetchCatBreeed = () => request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(`error: ${error}`);
    process.exit();
  }
 
  const data = JSON.parse(body);

  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log ("Breed not found");
  }
});

fetchCatBreeed();