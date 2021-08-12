describe('Name of the group', function(){

    it('FlipKart Mouse Movement ', () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://formy-project.herokuapp.com/switch-window');
       
       element(by.id('alert-button')).click();
       browser.switchTo().alert().getText().then(function(text){
           browser.sleep(2000);
           console.log("Text on alert " + text);
       })
    
    browser.switchTo().alert().accept();
   });

});