'use strict';

var assert = require('assert');
var stringFormatter = require('../src/index');

describe('longest word', function() {

  // This first test alone provides 100% coverage but doesn't actually verify that the function does 
  // what it is supposed to do. This test with no assertions is an extreme example and would no doubt 
  // be caught by code review, but just shows how easy it is to create poor unit tests.

  it('should return the longest word', function(done) {
    var sentence = 'Ladies and gentlemen, the truth is that mutants are very real, and that they are among us.';
    stringFormatter.longestWord(sentence);
    done();
  });

  // The following tests kill all mutants created by the Stryker mutation testing framework.

  it('should return the longest word', function(done) {
    var sentence = 'Ladies and gentlemen, the truth is that mutants are very real, and that they are among us.';
    var result = stringFormatter.longestWord(sentence);
    assert.equal(result, 'gentlemen');
    done();
  });

  it('should return the first longest word found', function(done) {
    var result = stringFormatter.longestWord('mutation testing gnitset noitatum');
    assert.equal(result, 'mutation');
    done();
  });

  it('should return an empty string when an empty string is provided', function(done) {
    var result = stringFormatter.longestWord('');
    assert.equal(result, '');
    done();
  });

  it('should return an empty string for non-string input', function(done) {
    var result = stringFormatter.longestWord(123);
    assert.equal(result, '');
    done();
  });

});
