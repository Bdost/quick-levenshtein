let levenshtein = require('./');

const dictionary = ['kitten', 'flaw', 'them', 'lawn'];
let vocabulary = 'lawn';
let arrayOfDisttances = [];

dictionary.forEach(word => {
  arrayOfDisttances.push({
    name: word,
    distance: levenshtein.calculateEditDistance(word, vocabulary),
  });
});
arrayOfDisttances.sort((a, b) => a.distance - b.distance);

console.log(arrayOfDisttances);
console.log(
  'The disttance between kitten and setting',
  levenshtein.calculateEditDistance('kitten', 'sitting'),
);
