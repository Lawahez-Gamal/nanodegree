const formHandler = require('../client/js/formHandler');

test('test handleSumit function', async() => {
    // test handle submit function if it is defined
    await expect(formHandler.handleSubmit).toBeDefined();
})