var Objects = require('./data/Object.json')
var using = require('jasmine-data-provider');

describe("Calculation of two numbers using OR ",function(){

    beforeEach(function() {
        browser.get(Objects.url);
         
    })

    afterEach(function() {
        browser.sleep(3000)
        
    })
    function add(a,b, operator)
    {
        element(by.model(Objects.locators.homepage.firstNum)).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+ operator + "']")).click();
        element(by.model(Objects.locators.homepage.secondNum)).sendKeys(b);
        element(by.id(Objects.locators.homepage.GO)).click();

        element.all(by.repeater('result in memory')).first().element(by.binding('result.value')).getText().then(function(dateandtime){
                    console.log(operator + " Result " + dateandtime);
        });
    }
    using(
        [
            {operation:Objects.operations.add}, 
            {operation:Objects.operations.sub},
            {operation:Objects.operations.div},
            {operation:Objects.operations.mul}], function(data) {
        it("ADD", function() {
            add(20,30, data.operation);
      });
    })
    
});
