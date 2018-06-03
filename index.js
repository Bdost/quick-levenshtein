'use strict';

var Levenshtein = {
  /*
  * Calculate levenshtein distance of the two strings.
   *
   * @param str1 String the first string.
   * @param str2 String the second string.
   * @return Integer the levenshtein distance (0 and above).
   */
  calculateEditDistance: function(str1, str2) {
    var distanceMatrix = [];
    var toBeComapredStr1 = ' ' + str1.toLowerCase();
    var toBeComapredStr2 = ' ' + str2.toLowerCase();

    for (var row = 0; row < toBeComapredStr1.length; row++) {
      var initializingArray = [];
      for (var colm = 0; colm < toBeComapredStr2.length; colm++) {
        initializingArray.push(['x']);
      }
      distanceMatrix.push(initializingArray);
    }

    for (var row = 0; row < toBeComapredStr1.length; row++) {
      for (var colm = 0; colm < toBeComapredStr2.length; colm++) {
        if (row === 0) {
          distanceMatrix[row][colm] = colm;
        } else if (colm === 0) {
          distanceMatrix[row][colm] = row;
        } else {
          if (toBeComapredStr1[row] === toBeComapredStr2[colm]) {
            distanceMatrix[row][colm] = distanceMatrix[row - 1][colm - 1];
          } else {
            var deletion = calculateEditOperation('deletion', distanceMatrix, row, colm);
            var insertion = calculateEditOperation('insertion', distanceMatrix, row, colm);
            var subtition = calculateEditOperation('substitution', distanceMatrix, row, colm);
            distanceMatrix[row][colm] = Math.min(deletion, insertion, subtition);
          }
        }
      }
    }
    var distance = distanceMatrix[toBeComapredStr1.length - 1][toBeComapredStr2.length - 1];
    return distance;
  },
};

function calculateEditOperation(operation, matrix, row, colm) {
  var value;
  switch (operation) {
    case 'deletion':
      value = matrix[row - 1][colm];
      return value + 1;
    case 'insertion':
      value = matrix[row][colm - 1];
      return value + 1;
    case 'substitution':
      value = matrix[row - 1][colm - 1];
      return value + 1;
    default:
      return value;
  }
}
module.exports = Levenshtein;
