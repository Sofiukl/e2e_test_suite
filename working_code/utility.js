var lastTimeTriggered = 0


function setTimeTriggered(){lastTimeTriggered = Date.now()}

function getTimeTriggered(){return lastTimeTriggered}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  
//customCommands - [{ selector : , type : , value : }]
//ops - submit , confirm 
async function runScenario(page,customCommands , ops){

        let delta = Date.now() - lastTimeTriggered
        do{
          await sleep(1000)
          delta = Date.now() - lastTimeTriggered
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
          takeScreenshot(page)
          if(ops[i]=='submit'){
            await page.click('div.wizSubmit input')
          }else if(ops[i]=='confirm'){
            await page.click('div.wizConfirm input')
          }else if(ops[i]=='next'){
            await page.click('div.wizNext input')
          }
  
          
          delta = Date.now() - lastTimeTriggered
          do{
            await sleep(1000)
            delta = Date.now() - lastTimeTriggered
          }while (delta < 1000) ;  

          takeScreenshot(page)
  
      }
  
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

async function takeScreenshot(page){

  await page.screenshot({path : Date.now()+'.png'})

}


  module.exports = {
    sleep : sleep,
    runScenario : runScenario,
    setTimeTriggered : setTimeTriggered,
    getTimeTriggered : getTimeTriggered
  }