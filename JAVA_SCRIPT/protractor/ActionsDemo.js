describe('Name of the group', function(){

    it('FlipKart Mouse Movement ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');
       
        var expCondWait = protractor.ExpectedConditions;
        browser.wait(expCondWait.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
                   
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

        browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
        browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();
    
    });



    it('Drag and drop on Protractor', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.xpath("//iframe[@class='demo-frame']")).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform().then(function(){
            element(by.id('droppable')).getText().then(function(text){
                console.log("Droppable text : " + text);
            });
        })
    });
});