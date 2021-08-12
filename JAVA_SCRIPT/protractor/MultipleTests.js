describe("Calculation of two numbers",function(){
      function add(a,b, operator)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+ operator + "']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();

        element.all(by.repeater('result in memory')).first().element(by.binding('result.value')).getText().then(function(dateandtime){
                    console.log(operator + " Result " + dateandtime);
        });
    }
    it("ADD", function() {
        browser.get('http://juliemr.github.io/protractor-demo');
            
           
            
            add(20,30, "ADDITION");
            expect("10".toEqual("20"))
           
    });

        it("SUB", function() {
        browser.get('http://juliemr.github.io/protractor-demo');
            add(20,30, "SUBTRACTION");
   
    });

        it("DIV", function() {
        browser.get('http://juliemr.github.io/protractor-demo');
            
           add(10,20, "DIVISION");
   
    });
        it("MUL", function() {
        browser.get('http://juliemr.github.io/protractor-demo');
            
           add(20,30, "MULTIPLICATION");
   
    });
});
