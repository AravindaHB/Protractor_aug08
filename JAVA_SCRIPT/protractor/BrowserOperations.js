describe('Name of the group', function(){

    it('FlipKart Mouse Movement ', () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');
       
        var expCondWait = protractor.ExpectedConditions;
        browser.wait(expCondWait.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
                   
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

        browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();

        browser.driver.getCurrentUrl().then(function(url){
            console.log("Current URL of the application " + url);
        })
        browser.driver.navigate().back();
        browser.driver.navigate().forward();
    
   });

});