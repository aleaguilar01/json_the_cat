const { fetchCatBreed } = require('../breedFetcher');
const { assert, expect } = require('chai');

describe('fetchCatBreed', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchCatBreed('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
    
      done();
    });
  });

  it('returns an error message for an invalid breed, via callback', (done) => {
    fetchCatBreed('French', (err, desc) => {
      // we expect no error for this scenario
      expect(err).to.be.an('Error');
      expect(err.message).to.equal("Breed not found");
      done();
    });
  });

});

      
