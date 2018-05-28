import request  from "request"
import {Constants} from "../Constants"
import { Context } from "../context/Context"
import winston from "winston"

export  class Customer {

	private _applicationDate : string
	private _customerCode : string


	constructor(){}


	public create() : Promise<any>  {


		
		return new Promise( (resolve) => {

			winston.debug("Creating Customer...")
		
			request.post(Constants.restBasePath + '/ref/clientonboarding/1/entry/all' , {
				json: JSON.parse(this.getRequest())
			} , function(err,resp,body){
				
				winston.debug("Creating Customer Response Received")
				winston.debug("Error : ")
				winston.debug(err)
				winston.debug("Body : ")
				winston.debug(body)

				if(err!=undefined){
					throw new Error("Unable to create customer - account ")
				}
				Context.getInstance().cashAccount(`C0${this._customerCode}-7`)
				Context.getInstance().creditAccount(`C0${this._customerCode}-8`)
				resolve()
			}).auth(Constants.restUser ,Constants.restPassword ,false)
		
		});
	}

	public applicationDate(v : string) : Customer {
		this._applicationDate=v
		return this
	}

	public customerCode(v : string) : Customer{
		this._customerCode = v
		return this
	}


	public async delete() : Promise<any>{

		//add code to delete a customer - account chain
		throw new Error("Not Implemented")
		
	}


	

private getRequest() : string {

	return `{
		"requestDataMap": {
			"customerOpenDate": "${this._applicationDate}",
			"customerCodeInformation": [{
					"customerCodeType": "GMO",
					"customerCode": "C0${this._customerCode}"
				}
			],
			"customerType": "Individual",
			"subCustomerType": "Local",
			"residentCountry": "TH",
			"contractCountry": "TH",
			"customerNameInformation": [{
					"languageCode": "THAI",
					"titleCode": "103",
					"title": "",
					"customerShortName": "อนุวัต ศิริวรรณ์",
					"officialName": "อนุวัต ศิริวรรณ์"
				}, {
					"languageCode": "ENGLISH",
					"titleCode": "103",
					"title": "",
					"customerShortName": "SHORT NAME",
					"officialName": "OFFICIAL NAME"
				}
			],
			"gender": "Male",
			"dateOfBirth": "23-03-1983",
			"nationality": [{
					"nationalityCode": "000",
					"default": "Y"
				}
			],
			"uidType": "0",
			"uidNo": "3660600482803",
			"taxId": "3660600482803",
			"expiryDate": "22-03-2026",
			"cardIssueDate": "14-05-2013",
			"creditLimitExpiryDate": "29-01-2019",
			"openedBy": "automated",
			"occupationId": "920",
			"occupationName": "",
			"natureOfBusiness": "180",
			"nameOfOrganisation": "GMO",
			"position": "หัวหน้า฿่ายป฿ิบัติ฿ารหลั฿ทรัพย์",
			"officeTelephone": "",
			"officeFax": "0863648821",
			"emergencyContactPerson": "อรุณ ศิริวรรณ์",
			"relationship": "บิดา",
			"emergencyTel": "056669070",
			"contractAddress": [{
					"building": "หมู่บ้าน/อาคาร ศุภาลัยปาร์ค อโศ฿รัชดา ชั้น 14 ",
					"addressOwnerName1": "เลขที่ 599/233 ",
					"city": "",
					"street": "ถนน อโศ฿ดิน๿ดง ",
					"district": "เขต/อำเภอ ดิน๿ดง ",
					"subDistrict": "๿ขวง/ตำบล ดิน๿ดง ",
					"stateProvince": "จังหวัด ฿รุงเทพมหานคร ",
					"zipPostalCode": "10400",
					"countryCode": "TH",
					"eMail": [{
							"toCcBcc": "TO",
							"name": "",
							"address": "testemail@nrifintech.com"
						}
					],
					"contactDetails": [{
							"contactType": "Mobile",
							"number": "0863648821"
						}
					]
				}
			],
			"addresses": [{
					"addressId": "Curr_Addr_Thailand",
					"building": "หมู่บ้าน/อาคาร ศุภาลัยปาร์ค อโศ฿รัชดา ชั้น 14 ",
					"addressOwnerName1": "เลขที่ 599/233 ",
					"city": "",
					"street": "ถนน อโศ฿ดิน๿ดง ",
					"district": "เขต/อำเภอ ดิน๿ดง ",
					"subDistrict": "๿ขวง/ตำบล ดิน๿ดง ",
					"stateProvince": "จังหวัด ฿รุงเทพมหานคร ",
					"zipPostalCode": "10400",
					"countryCode": "TH",
					"eMail": [{
							"toCcBcc": "",
							"name": "",
							"address": ""
						}
					],
					"contactDetails": [{
							"contactType": "",
							"number": ""
						}
					]
				}, {
					"addressId": "Curr_Office_Addr",
					"building": "หมู่บ้าน/อาคาร จีทาวเวอร์ เซ้าท์วิง ชั้น 15 ",
					"addressOwnerName1": "เลขที่ 9 ",
					"city": "",
					"street": "ถนน พระราม 9 ",
					"district": "เขต/อำเภอ ห้วยขวาง ",
					"subDistrict": "๿ขวง/ตำบล ห้วยขวาง ",
					"stateProvince": "จังหวัด ฿รุงเทพมหานคร ",
					"zipPostalCode": "10300",
					"countryCode": "TH",
					"eMail": [{
							"toCcBcc": "",
							"name": "",
							"address": ""
						}
					],
					"contactDetails": [{
							"contactType": "",
							"number": ""
						}
					]
				}, {
					"addressId": "Addr_Home_Country",
					"building": "",
					"addressOwnerName1": "เลขที่ 113/1 หมู่ที่ 5 ",
					"city": "",
					"street": "",
					"district": "เขต/อำเภอ โพทะเล ",
					"subDistrict": "๿ขวง/ตำบล ท่านั่ง ",
					"stateProvince": "จังหวัด พิจิตร ",
					"zipPostalCode": "66130",
					"countryCode": "TH",
					"eMail": [{
							"toCcBcc": "",
							"name": "",
							"address": ""
						}
					],
					"contactDetails": [{
							"contactType": "",
							"number": ""
						}
					]
				}
			],
			"ccy": "THB",
			"networth": "10000.000",
			"otherIncome": "",
			"spouseName": "",
			"spouseIncomeCurrency": "THB",
			"spouseSalary": "",
			"spouseIncomeSource": "THB",
			"spouseOffice": "",
			"spousePosition": "",
			"spouseTelephone": "",
			"creditLimit": "500000.000",
			"approvedDate": "${this._applicationDate}",
			"accountsInformation": [{
					"accountOpenDate": "${this._applicationDate}",
					"accountType": "B",
					"accountClass": "CASH_BALANCE",
					"residentCountry": "",
					"contractCountry": "",
					"nationalityCode": "",
					"paymentFrequency": "",
					"activityStatus": "ACTIVE",
					"accountCodeInformation": [{
							"accountNoType": "CS",
							"accountNumber": "0${this._customerCode}-7"
						}, {
							"accountNoType": "FO",
							"accountNumber": "0${this._customerCode}7"
						}, {
							"accountNoType": "TSD",
							"accountNumber": "052000${this._customerCode}7"
						}
					],
					"salesInformation": [{
							"salesRole": "MAIN",
							"salesCode": "9999"
						}
					],
					"commissionCategory": "BOX",
					"cashActivity": "Y",
					"stockActivity": "Y",
					"tradeActivity": "Y",
					"creditLimit": "500000.000",
					"custodianInfo": "",
					"approvedDate": "${this._applicationDate}",
					"netContractNoteGenFlag": "",
					"groupCriteriaOfStock": "",
					"residentialType": "",
					"accountTrdAttributes": {
						"initialMarginRateStr": "0.00",
						"callRateStr": "0.00",
						"forceRateStr": "0.00"
					},
					"cpSSIsInformation": [{
							"settlementFor": "WIRE_INSTRUCTION",
							"cashSecurity": "",
							"paymentReceipt": "P",
							"wayOfPayment": "ATS",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0208283189",
							"priority": "1"
						}, {
							"settlementFor": "CORPORATE_ACTION",
							"cashSecurity": "",
							"paymentReceipt": "P",
							"wayOfPayment": "",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0208283189",
							"priority": "2"
						}, {
							"settlementFor": "WIRE_INSTRUCTION",
							"cashSecurity": "",
							"paymentReceipt": "R",
							"wayOfPayment": "E_PAYMENT",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${this._customerCode}",
							"priority": "3"
						}
					],
					"serviceOffice": "001",
					"openedBy": "automated"
				}, {
					"accountOpenDate": "${this._applicationDate}",
					"accountType": "B",
					"accountClass": "CREDIT_BALANCE",
					"residentCountry": "",
					"contractCountry": "",
					"nationalityCode": "",
					"paymentFrequency": "",
					"activityStatus": "ACTIVE",
					"accountCodeInformation": [{
							"accountNoType": "CS",
							"accountNumber": "0${this._customerCode}-8"
						}, {
							"accountNoType": "FO",
							"accountNumber": "0${this._customerCode}8"
						}, {
							"accountNoType": "TSD",
							"accountNumber": "052000${this._customerCode}8"
						}
					],
					"salesInformation": [{
							"salesRole": "MAIN",
							"salesCode": "9999"
						}
					],
					"commissionCategory": "BOX",
					"cashActivity": "Y",
					"stockActivity": "Y",
					"tradeActivity": "Y",
					"creditLimit": "0.000",
					"custodianInfo": "",
					"approvedDate": "${this._applicationDate}",
					"netContractNoteGenFlag": "",
					"groupCriteriaOfStock": "",
					"residentialType": "",
					"accountTrdAttributes": {
						"initialMarginRateStr": "0.00",
						"callRateStr": "0.00",
						"forceRateStr": "0.00"
					},
					"cpSSIsInformation": [{
							"settlementFor": "CORPORATE_ACTION",
							"paymentReceipt": "P",
							"wayOfPayment": "",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${this._customerCode}",
							"priority": "2"
						}, {
							"settlementFor": "WIRE_INSTRUCTION",
							"cashSecurity": "",
							"paymentReceipt": "P",
							"wayOfPayment": "ATS",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${this._customerCode}",
							"priority": "1"
						}, {
							"settlementFor": "WIRE_INSTRUCTION",
							"cashSecurity": "",
							"paymentReceipt": "R",
							"wayOfPayment": "E_PAYMENT",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${this._customerCode}",
							"priority": "3"
						}
					],
					"serviceOffice": "001",
					"openedBy": "automated"
				}
			]
		}
	}
	`

}




}


