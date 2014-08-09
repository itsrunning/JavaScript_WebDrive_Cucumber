var first_step = function (){
  this.World = require("../support/world.js").World; 

this.Given(/^this step is running$/, function (callback) {
  callback();
});

this.When(/^this step also runs$/, function (callback) {
  callback();
});

this.Then(/^the test passes$/, function (callback) {
  callback();
});

};

module.exports = first_step;
