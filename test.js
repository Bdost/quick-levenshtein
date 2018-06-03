levenshtein = require('./index.min.js');

console.log('levenshtein');
console.log(levenshtein.calculateEditDistance);
var assert = require('assert');

// Tests are hierarchical. Here we define a test suite for our calculateEditDistance.
describe('Calculator Tests', function() {
  // And then we describe our testcases.
  it('returns 3 for edit distance between kitten and sitting  ', function(done) {
    assert.equal(levenshtein.calculateEditDistance('kitten', 'sitting'), 3);
    // Invoke done when the test is complete.
    done();
  });

  it('returns edit distance 0 for two similar words', function(done) {
    assert.equal(levenshtein.calculateEditDistance('sitting', 'sitting'), 0);
    done();
  });
});
