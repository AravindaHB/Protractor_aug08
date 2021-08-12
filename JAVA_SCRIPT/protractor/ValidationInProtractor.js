describe("Calculation of two numbers",function(){
    it("ADD", function() {
        browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
            element(by.model('first')).sendKeys(10);
            element(by.model('second')).sendKeys(20);
            element(by.id('gobutton')).click();
            element(by.css("h2[class='ng-binding']")).getText().then(function(text){
                console.log("Sum of two numbers is : " + text);
            })
            
            expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('30');
        }); 
        
    });
});
