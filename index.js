const puppeteer = require('puppeteer')

var lastTimeTriggered = 0;

var x = async function() {
  const browser = await puppeteer.launch({ headless : false , args : [ '--start-maximized']})
  const page = await browser.newPage()


  

  
  

  page.on('requestfinished',()=>{lastTimeTriggered = Date.now() })

  
   page.setViewport({
     height:800,width:1820
   })


  await page.goto('http://localhost:8080/igv-tomcat/login#')
   await page.type('input[name="j_username"]', 'gmo-ops')
   await page.type('#j_password', 'welcome@123')

  // await page.type('input[name="j_username"]', 'gmo-ops')
  // await page.type('#j_password', 'welcome@123')
  
 //await page.click('. input')
  await page.click('.loginButton input'); 
  await page.waitForNavigation({ waitUntil: 'networkidle0' }); 
  
  await page.screenshot({path : 'something.png'})
  var anchors = await page.$$("#igvMenuContainer a")


  var elements = []

  // var matchTextElements = ['Trade','Execution','Entry']

  // var matchTextElements = ['Position & Balances' , 'Beneficiary' , 'Security I/O' , 'Security In/Out Entry']
  var matchTextElements = ['Position & Balances' , 'Beneficiary' , 'Cash I/O' , 'Cash In/Out Entry']
  
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



var stockIn = [ { type: 'select',
selector: 'select[name="entry.inOut"]',
value: 'I' },
{ type: 'text',
selector: 'input[name="cashInDateStr"]',
value: '10-09-2018' },
{ type: 'text',
selector: 'input[name="cashOutDateStr"]',
value: '10-09-2018' },
{ type: 'text',
selector: 'input[name="entry.currency"]',
value: 'THB' },
{ type: 'text',
selector: 'input[name="entry.amountStr"]',
value: '1,000' },
{ type: 'select',
selector: 'select[name="entry.taxIncomeType"]',
value: 'CASH_ADJUSTMENT' },
{ type: 'select',
selector: 'select[name="entry.wayOfSettlement"]',
value: 'BANK TRANSFER' },
{ type: 'select',
selector: 'select[name="entry.mode"]',
value: 'INTERNAL_BOOKING' },
{ type: 'select',
selector: 'select[name="cashInReason"]',
value: 'WRITE_OFF' },
{ type: 'select',
selector: 'select[name="entry.noCam01Required"]',
value: 'N' },
{ type: 'text',
selector: 'input[name="cashInAccountNo"]',
value: 'C0000001-8' },
{ type: 'select',
selector: 'select[name="cashInAccountCode"]',
value: '211104' },
{ type: 'select',
selector: 'select[name="cashInAccountBalanceTypeStr"]',
value: '10' },
{ type: 'select',
selector: 'select[name="cashOutAccountBalanceTypeStr"]',
value: '10' } ]

    
// var stockIn =  
// [name={ type : 'select' , selector : 'select[name="execScreenData.tradeType"]' , value : 'EQUITY'   },
//  { type : 'text' , selector : 'input[name="execScreenData.tradeDateStr"]' , value : '23-03-2018'   },
//  { type : 'text' , selector : 'input[name="execScreenData.executionTime"]' , value : '11:11:11'   },
//  { type : 'select' , selector : 'select[name="execScreenData.buySellOrientation"]' , value : 'FB'   },
//  { type : 'text' , selector : 'input[name="execScreenData.inventoryAccountNo"]' , value : 'P400000-1/GMO'   },
//  { type : 'text' , selector : 'input[name="execScreenData.brokerAccount"]' , value : 'K0000001'   },
//  { type : 'select' , selector : 'select[name="execScreenData.principalType"]' , value : 'Agency'   },
//  { type : 'text' , selector : 'input[name="execScreenData.securityInfo"]' , value : 'BBL'   },
//  { type : 'text' , selector : 'input[name="execScreenData.quantityStr"]' , value : '100'   },
//  { type : 'text' , selector : 'input[name="execScreenData.inputPriceStr"]' , value : '10'   },
//  { type : 'select' , selector : 'select[name="execScreenData.grossNetType"]' , value : 'GROSS'   },
//  { type : 'select' , selector : 'select[name="execScreenData.inputPriceFormat"]' , value : 'UNIT PRICE'   },
//  { type : 'select' , selector : 'select[name="execScreenData.accountBalanceTypeStr"]' , value : '10'   },
//  { type : 'text' , selector : 'input[name="execScreenData.tradeCurrency"]' , value : 'THB/ISO3A'   },
//  { type : 'select' , selector : 'select[name="execScreenData.exCouponFlag"]' , value : 'N'   },
//  { type : 'select' , selector : 'select[name="execScreenData.dirtyPriceFlag"]' , value : 'N'   },
//  { type : 'select' , selector : 'select[name="execScreenData.negativeAccruedInterestFlag"]' , value : 'N'   },
//  { type : 'select' , selector : 'select[name="execScreenData.wiCommFlag"]' , value : 'Y'   },
//  { type : 'text' , selector : 'input[name="execScreenData.senderReferenceNo"]' , value : 'OD-000000001'   },
//  { type : 'text' , selector : 'input[name="execScreenData.sourceReferenceNo"]' , value : 'TD-000000001'   },
//  { type : 'text' , selector : 'input[name="execScreenData.cpAccountNo"]' , value : 'C0000003-8'   },
//  { type : 'select' , selector : 'select[name="tradeChannel"]' , value : 'INTERNET'   } ]

await runScenario(page,stockIn,['submit','confirm'])
  

  //await browser.close()
}

 function typeInText(page,selector,value){
  
  return new Promise(resolve => {
  
    page.$(selector).then( e => {
      if(e==null){
        console.log("This is a select element " + selector);
        resolve()
        return;
      }
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

  //console.log(customCommands);
  
  //return new Promise((resolve) => {

      let delta = Date.now() - lastTimeTriggered
      do{
        await sleep(250)
        delta = Date.now() - lastTimeTriggered
        //console.log(lastTimeTriggered)
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
        }else if(ops[i]=='next'){
          await page.click('div.wizNext input')
        }

        delta = Date.now() - lastTimeTriggered
        do{
          await sleep(250)
          delta = Date.now() - lastTimeTriggered
        }while (delta < 1000) ;  

    }

    

  //})



}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}