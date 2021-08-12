const homepage = require('../page/homepage.js');
describe('Addition using POM', () => {


    it('ADD', () => {
        browser.get('http://juliemr.github.io/protractor-demo');
        homepage.enterFNum(50);
        homepage.enterSNum(25);
        homepage.Go();
    });
    
});