let homepage = function ()
{
    let fn = element(by.model('first'));
    let sn = element(by.model('second'));
    let go = element(by.id('gobutton'));


    this.enterFNum = function (firstNumber)
    {
        fn.sendKeys(firstNumber)
    }
    this.enterSNum = function (secondNumber)
    {
        sn.sendKeys(secondNumber)
    }
    this.Go = function ()
    {
       go.click();
    }
    
};

module.exports = new homepage();