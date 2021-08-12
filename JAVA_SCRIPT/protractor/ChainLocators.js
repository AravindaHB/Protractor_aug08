describe("Calculation of two numbers",function(){
    function add(a,b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
        
    }
    it("ADD", function() {
        browser.get('http://juliemr.github.io/protractor-demo');
            
            add(10,20);
            add(20,30);
        browser.sleep(30000).then(function(){
            console.log("close");
        })
        // printing the total number of rows
        element.all(by.repeater('result in memory')).count().then(function(count){
                console.log("Total number of Rows : " + count);
        });   
    
        // Chain locators
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.binding('result.value')).getText().then(function(dateandtime){
                    console.log(dateandtime);
            })
        });

        //Chain locator - getting first Result
        element.all(by.repeater('result in memory')).first().element(by.binding('result.value')).getText().then(function(dateandtime){
                    console.log("First Result " + dateandtime);
        })
    });
});
