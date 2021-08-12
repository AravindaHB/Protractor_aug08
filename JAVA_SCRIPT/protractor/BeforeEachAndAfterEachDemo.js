describe("Calculation of two numbers",function(){

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo');
         
    })

    afterEach(function() {
        browser.sleep(3000)
        
    })
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
            add(20,30, "ADDITION");
            expect("10".toEqual("20"))
           
    });

    it("SUB", function() {
            add(20,30, "SUBTRACTION");
   
    });

    it("DIV", function() {
        add(10,20, "DIVISION");
   
    });
    it("MUL", function() {
        add(20,30, "MULTIPLICATION");
   
    });
});
