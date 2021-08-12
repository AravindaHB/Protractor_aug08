describe('Name of the group', function(){

    it('FlipSwitchto Window ', () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
       
       element(by.linkText('Contact Us')).click();

        browser.getAllWindowHandles().then(function(windowIDs){
            console.log(windowIDs[0] + " : " + windowIDs[1]);
            browser.switchTo().window(windowIDs[1]);
            element.all(by.tagName('a')).each(function(link){
                    link.getText().then(function(emailID){
                        console.log(emailID);
                    })

            });
            browser.switchTo().window(windowIDs[0]).then(function(){
                 console.log("----------------------------------------------------------------");       
            });
            
                element.all(by.tagName('a')).each(function(link){
                    link.getText().then(function(emailID){
                        console.log(emailID);
                    })

                });
        })

   });

});