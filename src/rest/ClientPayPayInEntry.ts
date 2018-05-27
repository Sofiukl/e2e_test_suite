import request  from "request"
import {Constants} from "../Constants"
import { Context } from "../context/Context"
import fs from "fs";
import winston from "winston"

export  class ClientPayPayInEntry {

	private _applicationDate : string
	private _accountNo : string
	private _customerCode : string
	private _receivedAmount : string
	private _valueDate : string
	private _receivedDate : string


	constructor(){}


	public execute() : Promise<any>  {
		return new Promise( (resolve,reject) => {

			//create an artificial file at the location D:\opt\appsdata\tmp\ABCD.pdf
			//to be fetched from CAM_CONFIG later

			//

			fs.writeFileSync("/opt/appsdata/tmp/ABCD.pdf","text")
		
			request.post(Constants.restBasePath + '/stl/clientreceipt/1/entry' , {
				json: JSON.parse(this.getRequest())
			} , function(err,response , body){
				
					winston.debug("The response : ")
					winston.debug("Error : ")
					winston.debug( err)
					winston.debug("Body : " )
					winston.debug(body)

				if(err!=undefined || !body.success){
					throw new Error("Unable to create customer - account ")
				}
				

				if(body.success){
					console.log(body.value[0].settlementReferenceNumber);
					resolve(body.value[0].settlementReferenceNumber)
				}
				
				reject()
				
			}).auth(Constants.restUser ,Constants.restPassword ,false)
		
		});
	}

	public accountNo(v : string) : ClientPayPayInEntry {
		this._accountNo=v
		return this
	}

	public receivedAmount(v : string) : ClientPayPayInEntry{
		this._receivedAmount = v
		return this
	}

	public valueDate(v : string) : ClientPayPayInEntry{
		this._valueDate = v
		return this
	}


	public customerCode(v : string) : ClientPayPayInEntry{
		this._customerCode = v
		return this
	}


	public receivedDate(v : string) : ClientPayPayInEntry {
		this._receivedDate = v
		return this
	}


	


	


	//"0200${this._customerCode}:::::004-0003",

private getRequest() : string {

	return 	`
	{
		"requestDataMap": {
			"accountNo": "${this._accountNo}",
			"accountBalanceType": "10",
			"currency": "THB",
			"receivedAmount": "${this._receivedAmount}",
			"valueDate": "${this._valueDate}",
			"receivedDate": "${this._receivedDate}",
			"wayOfPayment": "PAY_IN",
			"payInSlipFileReferenceName": "ABCD.pdf",
			"settlementFor": "",
			"cashSecurity": "",
			"paymentReceipt": "",
			"priority": "",
			"ourBankAccountNo": "B000000281568817",
			"ourIntermediaryInfo": "",
			"instructionReqdFlag": "N",
			"txnReferenceNo": "201804170000630",
			"remarks": "",
			"cpBankCode": "004",
			"cpSettleAccountNo": "6002123973",
			"cpSettleAccountName": "",
			"externalReferenceNo": "201804170000000017"
		}
	}
	`
	
}




}


