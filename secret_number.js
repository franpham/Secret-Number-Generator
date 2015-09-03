'use strict';
module.exports = function() {
  	var secret = Math.random() * 100;

  	return function () {
  		return secret;
  	}
};