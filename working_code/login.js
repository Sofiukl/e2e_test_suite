


async function login(page){
    
    await page.goto('http://localhost:8080/igv-tomcat/login#')
    await page.type('input[name="j_username"]', 'gmo-ops')
    await page.type('#j_password', 'welcome@123')

     //await page.click('. input')
    await page.click('.loginButton input'); 
    await page.waitForNavigation({ waitUntil: 'networkidle0' }); 
    await page.screenshot({path : 'login.png'})


}

module.exports = {
    login : login
}