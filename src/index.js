'use strict';

/**
 * Returns the longest word of a sentence.
 * If there is more than one word with the same length the first will be returned.
 * @param {string} str
 * @return {string}
 */
module.exports.longestWord = function(str) {
  if (typeof str !== "string") return "";

  var arr = str.match(/\w[a-z]{0,}/gi);
  if (arr === null || arr.length === 0) return "";

  var result = arr[0];
  for(var x = 1; x < arr.length; x++) {
    if(result.length < arr[x].length) {
      result = arr[x];
    } 
  }
  return result;
}
