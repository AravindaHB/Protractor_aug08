describe('Name of the group', function(){

    it('AutoSuggestions in Google ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
        element(by.name('q')).sendKeys("Synechron");

        var expCondWait = protractor.ExpectedConditions;
        browser.wait(expCondWait.visibilityOf(element(by.xpath("//ul[@class='erkvQe']"))));
        element.all(by.xpath("//ul/li[@role='presentation']")).each(function(suggestion){
            suggestion.getText().then(function(sugText){
                console.log(sugText);
            })
                   
    });
    
});
});