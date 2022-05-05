describe('Home', () => {
    it('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/');
        
        //Assert title
        await expect(browser).toHaveTitle('Practice A-commerce Site - Automation Bro')
    });
});