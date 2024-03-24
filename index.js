const { fetchCatBreed } = require("./breedFetcher");

const args = process.argv.slice(2);

fetchCatBreed(args[0], (error, description) => {
  if (error) {
    console.log(error.message);
    process.exit();
  }
  console.log(description);
});