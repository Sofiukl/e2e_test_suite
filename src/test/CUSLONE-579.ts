
import  puppeteer  from "puppeteer"

 puppeteer.launch({headless : false }).then(browser => {
        
        console.log(browser.wsEndpoint());
        
 })

