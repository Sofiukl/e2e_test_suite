const puppeteer = require('puppeteer')

var lastTimeTriggered = 0;

var x = async function() {
  const browser = await puppeteer.launch({ headless : false})
  const page = await browser.newPage()


  

  
  

  page.on('requestfinished',()=>{lastTimeTriggered = Date.now() })



   page.setViewport({
     height:1240,width:1600
   })


  await page.goto('http://localhost:8080/igv-tomcat/login#')
   await page.type('input[name="j_username"]', 'nri-admin@z.com')
   await page.type('#j_password', 'welcome@123')

  // await page.type('input[name="j_username"]', 'gmo-ops')
  // await page.type('#j_password', 'welcome@123')
  
 //await page.click('. input')
  await page.click('.loginButton input'); 
  await page.waitForNavigation({ waitUntil: 'networkidle0' }); 
  
  await page.screenshot({path : 'something.png'})
  var anchors = await page.$$("#igvMenuContainer a")


  var elements = []

  var matchTextElements = ['Position & Balances' , 'Beneficiary' , 'Security I/O' , 'Security In/Out Entry']
  var count = 0;
  
  for( var i = 0 ; i <anchors.length ; i++){


    var text = await (await anchors[i].getProperty('text')).jsonValue()

    if(text == matchTextElements[count]){
      count++
      elements.push(anchors[i])

      if(count >= matchTextElements.length){
        break
      }
    }

  
  }

  var nav = page.waitForNavigation({ waitUntil: 'networkidle2' }); 
  for(var i=0;i<elements.length;i++){
    await elements[i].click()
  }
  await nav
    
var stockIn =  [
  { type : 'select' , selector : 'select[name="entry.inOut"]' , value : 'I'} ,
{ type : 'text' , selector : 'input[name="entry.ourSettleAccountNo"]' , value : 'T000000004000001'} ,
{ type : 'text' , selector : 'input[name="entry.accountNo"]' , value : 'C0000003-8'} ,
{ type : 'text' , selector : 'input[name="entry.custodianBank"]' , value : 'TSD'} ,
{ type : 'text' , selector : 'input[name="secInDateStr"]' , value : '23-03-2018'} ,
{ type : 'text' , selector : 'input[name="secInTime"]' , value : '20:13:17'} ,
{ type : 'text' , selector : 'input[name="secOutDateStr"]' , value : '23-03-2018'} ,
{ type : 'text' , selector : 'input[name="secOutTime"]' , value : '20:13:17'} ,
{ type : 'text' , selector : 'input[name="entry.securityCode"]' , value : 'AAV'} ,
{ type : 'text' , selector : 'input[name="entry.bookCostStr"]' , value : '10.0000000'} ,
{ type : 'text' , selector : 'input[name="entry.amountStr"]' , value : '10'} 
];

await runScenario(page,stockIn,['submit'])
  

  //await browser.close()
}

 function typeInText(page,selector,value){
  
  return new Promise(resolve => {
  
    page.$(selector).then( e => {
      
      e.boundingBox().then(lm => {

        if(lm!=null){

          e.type(value).then(()=>{resolve()}) 

        }else{
          resolve()
        }

      })

    })
    
  
  })


}



x()


//customCommands - [{ selector : , type : , value : }]
//ops - submit , confirm 
async function runScenario(page,customCommands , ops){

  console.log(customCommands);
  
  //return new Promise((resolve) => {

      let delta = Date.now() - lastTimeTriggered
      do{
        await sleep(250)
        delta = Date.now() - lastTimeTriggered
        console.log(lastTimeTriggered)
      }while (delta < 2000) ;  
        
    
    const executionContext = await page.mainFrame().executionContext();
    const result = await executionContext.evaluate((customCommands) => {
    
      for( var i=0;i<customCommands.length;i++){
          $(customCommands[i].selector).val('')
      }
    },customCommands);
    
    for( var i=0;i<customCommands.length;i++){
        if(customCommands[i].type == 'select'){
          await page.select(customCommands[i].selector,customCommands[i].value)
        }else if(customCommands[i].type === 'text'){
          await typeInText(page , customCommands[i].selector,customCommands[i].value)
        }
    }


         
    for(var i=0;i<ops.length;i++){
        if(ops[i]=='submit'){
          await page.click('div.wizSubmit input')
        }else if(ops[i]=='confirm'){
          await page.click('div.wizConfirm input')
        }
    }

  //})



}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}