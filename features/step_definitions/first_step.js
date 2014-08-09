var first_step = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^this step is running$/, function (callback) {
        var driver = this.browser;
        var by = this.wd.By;
        driver.get("http://www.google.com");
        driver.findElement(by.name("q")).sendKeys("webdriver");
        driver.findElement(by.name("btnG")).click();
        var promise = driver.getTitle();
        promise.then(function (title) {
            console.log("got the title");
            assertEquals("webdriver - Google Search", title);
            driver.quit();
        });

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
