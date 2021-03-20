const urlCheck = require('../client/js/checkurl')

test('the fuction to be defined', async() => {
    await expect(urlCheck.urlValidator).toBeDefined();
})