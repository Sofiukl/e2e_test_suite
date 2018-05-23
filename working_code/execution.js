const puppeteer = require('puppeteer')
const util = require('./utility')

async function createExecution(page , date , isBuy, time,  account , instrument , quantity , bookCost, isFree ){
////////////////////////////////////////////////////////////////////////////////////////
  
  var matchTextElements = ['Trade','Execution','Entry']

  var anchors = await page.$$("#igvMenuContainer a")
  var elements = []
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

////////////////////////////////////////////////////////////////////////////////////////


var executionEntry =  
[name={ type : 'select' , selector : 'select[name="execScreenData.tradeType"]' , value : 'EQUITY'   },
 { type : 'text' , selector : 'input[name="execScreenData.tradeDateStr"]' , value : date   },
 { type : 'text' , selector : 'input[name="execScreenData.executionTime"]' , value : time   },
 { type : 'select' , selector : 'select[name="execScreenData.buySellOrientation"]' , value : isBuy ? 'FB' : 'FS' },
 { type : 'text' , selector : 'input[name="execScreenData.inventoryAccountNo"]' , value : 'P400000-1/GMO'   },
 { type : 'text' , selector : 'input[name="execScreenData.brokerAccount"]' , value : 'K0000001'   },
 { type : 'select' , selector : 'select[name="execScreenData.principalType"]' , value : 'Agency'   },
 { type : 'text' , selector : 'input[name="execScreenData.securityInfo"]' , value : instrument   },
 { type : 'text' , selector : 'input[name="execScreenData.quantityStr"]' , value : quantity   },
 { type : 'text' , selector : 'input[name="execScreenData.inputPriceStr"]' , value : bookCost   },
 { type : 'select' , selector : 'select[name="execScreenData.grossNetType"]' , value : 'GROSS'   },
 { type : 'select' , selector : 'select[name="execScreenData.inputPriceFormat"]' , value : 'UNIT PRICE'   },
 { type : 'select' , selector : 'select[name="execScreenData.accountBalanceTypeStr"]' , value : '10'   },
 { type : 'text' , selector : 'input[name="execScreenData.tradeCurrency"]' , value : 'THB/ISO3A'   },
 { type : 'select' , selector : 'select[name="execScreenData.exCouponFlag"]' , value : 'N'   },
 { type : 'select' , selector : 'select[name="execScreenData.dirtyPriceFlag"]' , value : 'N'   },
 { type : 'select' , selector : 'select[name="execScreenData.negativeAccruedInterestFlag"]' , value : 'N'   },
 { type : 'select' , selector : 'select[name="execScreenData.wiCommFlag"]' , value : 'Y'   },
 { type : 'text' , selector : 'input[name="execScreenData.senderReferenceNo"]' , value : 'OD-000000001'   },
 { type : 'text' , selector : 'input[name="execScreenData.sourceReferenceNo"]' , value : 'TD-000000001'   },
 { type : 'text' , selector : 'input[name="execScreenData.cpAccountNo"]' , value : account   },
 { type : 'select' , selector : 'select[name="tradeChannel"]' , value : 'INTERNET'   } ]

await util.runScenario(page,executionEntry,['submit','confirm'])


}


module.exports = {
    create : createExecution
}