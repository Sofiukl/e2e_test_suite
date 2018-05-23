const puppeteer = require('puppeteer')
const login = require('./working_code/login') 
const utility = require('./working_code/utility') 
const execution = require('./working_code/execution') 
const customerRest = require('./working_code/customerRest')

const batch = require('./working_code/runBatch')

async function run(){

    const browser = await puppeteer.launch({ headless : false , args : [ '--start-maximized']})
    const page = await browser.newPage()
    page.on('requestfinished',()=>{utility.setTimeTriggered() })

   page.setViewport({
     height:800,width:1820
   })

   // await customerRest.createCustomer('012345699')
    await login.login(page)
    await execution.create(page,'14-09-2018' , true , '10:00:00' , 'C0012345699-8' , 'BBL' , '1000' ,  '10' , true);

    await batch.execute('TRD/ExecutionToTrade'  , ' -d 20180914 -a C0012345699-8')
    await batch.execute('TRD/TaxAndCommCalculator'  , ' -d 20180914 -a C0012345699-8')
    await batch.execute('CAM/FIFOPLCalculator'  , ' -a C0012345699-8')

    // await execution.create(page,'15-04-2018' , true , '10:00:00' , 'C0012345699-8' , 'BBL' , '500' ,  '11' , true);

    // await batch.execute('TRD/ExecutionToTrade'  , ' -d 20180402 -a C0012345699-8')
    // await batch.execute('TRD/TaxAndCommCalculator'  , ' -d 20180402 -a C0012345699-8')
    // await batch.execute('CAM/FIFOPLCalculator'  , ' -a C0012345699-8')


    await browser.close()


 //   async function createExecution(page , date , isBuy, time,  account , instrument , quantity , bookCost, isFree ){



}


run()