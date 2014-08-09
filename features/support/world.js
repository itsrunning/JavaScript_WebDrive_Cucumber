
var World = function World(callback) {
    this.wd = require('selenium-webdriver');
    this.browser = new this.wd.Builder().withCapabilities(this.wd.Capabilities.chrome()).build();

    this.visit = function(url) {
        this.browser.get(url);
    };

    this.quit = function(){
        this.browser.quit();
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;
