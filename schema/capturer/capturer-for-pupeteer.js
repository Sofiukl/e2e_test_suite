// For puppeteer we need to capture the below details:
//  1. Path of navigation (Menu Path)
//  2. Entry Fields Type based on response
//  3. Post Values
//  4. Next or Confirm
//  Prepare the proper JSON elment based on above information
//
//
//
//
//
//



var httpProxy = require('http-proxy');
const cheerio = require('cheerio')
var decode = require('decode-uri-component')

var fs = require('fs')


// Error example
//
// Http Proxy Server with bad target
//
var proxy = httpProxy.createServer({
  target:'http://localhost:8080'
});

proxy.listen(9876);
console.log("Litening at http://localhost:9876/igv-tomcat/")

//
// Listen for the `proxyRes` event on `proxy`.
//
proxy.on('proxyReq', function (proxyRes, req, res) {
  someCrappyRequestProcessor(req)
});


// var inputType = {}
// var required = []
// var inputLabel = {}

proxy.on('proxyRes', function (proxyRes, req, res) {
  
  if((req.url.indexOf('/init')>0) && (req.url.indexOf('/popup/')<0)){

    var body = new Buffer('');
    proxyRes.on('data', function (data) {
        body = Buffer.concat([body, data]);
    });
    proxyRes.on('end', function () {
        body = body.toString(); 
      processResponse(body)
    });
  }

    

});


function someCrappyRequestProcessor(req){

    if(req.method=='GET'){
        if(!(
            req.url.endsWith('.js') || req.url.endsWith('.css') ||  
            req.url.endsWith('.gif') || req.url.endsWith('.png') || req.url.endsWith('.jpg'))
            || req.url.indexOf('/popup/')>0
        ){      
        }
    }else if(req.method=='POST'){
        var url = req.url;
        
////////////////////////////////////////

if(url.endsWith("/entry/submit") || url.indexOf('query/result')>-1 || url.indexOf('/query/submit')){

var body = new Buffer('');
    req.on('data', function (data) {
        body = Buffer.concat([body, data]);
    });
    req.on('end', function () {
        body = body.toString();
        processPostRequest(body,url)
    });
  }

//////////////////////////////////////

      }
    }

    


    function processPostRequest(msg,url){

      var tokens = msg.split('&')
      var keys = {};
      for(var i=0;i<tokens.length;i++){
          var keyVal = tokens[i].split('=');
          keys[keyVal[0]]=keyVal[1]==undefined ? keyVal[1] : decode(keyVal[1])  
      }
      // prepare the basic stupid looking JSON
      object = []
      for( var selector in keys){
        defaultValue = keys[selector];
        // if(inputType!=undefined)
        //   type = inputType[selector]
        //req = reqired[selector]


        if(defaultValue!="" && (selector != "commandFormId" && selector!="screenId" && selector != "versionNo")){

          //formselector=(type=="select"?"select":"input")+"[name=\""+selector+"\"]"

          var currentObject = selVal[selector]

          if(currentObject!=null){
            currentObject['defaultValue'] = defaultValue
          }
        }

      }

      console.log(selVal);
      fs.writeFileSync("contract.json",JSON.stringify(selVal));
    }

    

    /**
     * Process the response that has been returned from a GET request 
     * due to init not of type popup
     * 
     * @param {*} response 
     */

var selVal = {}

function processResponse(response){
  
  selVal = {}

  //inputType={}
  required=[]
  inputLabel={}

  const $ =cheerio.load(response)
  $('input[type="text"]').each(function(i,element){
    
    let selector = `label[for="${element.attribs['name']}"]`;
    console.log(selector);
    

    selVal[element.attribs['name']] = {
      type : 'text',
      required : $(selector).hasClass('required') ,
      label : $(selector).text(),
      id : element.attribs['id']
    }

    //inputType[element.attribs['name']]='text'

  });

  $('input[type="password"]').each(function(i,element){
    let selector = `label[for="${element.attribs['name']}"]`;
    console.log(selector);
    

    selVal[element.attribs['name']] = {
      type : 'password',
      required : $(selector).hasClass('required') ,
      label : $(selector).text(),
      id : element.attribs['id']
    }
  });

  $('select').each(function(i,element){

    let selector = `label[for="${element.attribs['name']}"]`;
    console.log(selector);
    
    selVal[element.attribs['name']] = {
      type : 'select',
      required : $(selector).hasClass('required') ,
      label : $(selector).text(),
      id : element.attribs['id']
    }

  

    

  });

  //console.log(selVal);
  

}