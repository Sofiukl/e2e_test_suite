const request = require('request')


function createAccount(code){
return new Promise( (resolve) => {

	request.post('http://localhost:8080/igv-rest/ref/clientonboarding/1/entry/all' , {
		json: JSON.parse(getRequest(code))
	} , function(err,data){console.log(data.body);
		resolve()
	}).auth('gmo-api:welcome@123:GMO','welcome@123',false)

});
}






function getRequest(uniqueCode)  {

	return `{
		"requestDataMap": {
			"customerOpenDate": "21-05-2018",
			"customerCodeInformation": [{
					"customerCodeType": "GMO",
					"customerCode": "C0${uniqueCode}"
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
			"approvedDate": "21-05-2018",
			"accountsInformation": [{
					"accountOpenDate": "21-05-2018",
					"accountType": "B",
					"accountClass": "CASH_BALANCE",
					"residentCountry": "",
					"contractCountry": "",
					"nationalityCode": "",
					"paymentFrequency": "",
					"activityStatus": "ACTIVE",
					"accountCodeInformation": [{
							"accountNoType": "CS",
							"accountNumber": "0${uniqueCode}-7"
						}, {
							"accountNoType": "FO",
							"accountNumber": "0${uniqueCode}7"
						}, {
							"accountNoType": "TSD",
							"accountNumber": "052000${uniqueCode}7"
						}
					],
					"salesInformation": [{
							"salesRole": "MAIN",
							"salesCode": "98765"
						}
					],
					"commissionCategory": "BOX",
					"cashActivity": "Y",
					"stockActivity": "Y",
					"tradeActivity": "Y",
					"creditLimit": "500000.000",
					"custodianInfo": "",
					"approvedDate": "21-05-2018",
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
						}
					],
					"serviceOffice": "001",
					"openedBy": "automated"
				}, {
					"accountOpenDate": "21-05-2018",
					"accountType": "B",
					"accountClass": "CREDIT_BALANCE",
					"residentCountry": "",
					"contractCountry": "",
					"nationalityCode": "",
					"paymentFrequency": "",
					"activityStatus": "ACTIVE",
					"accountCodeInformation": [{
							"accountNoType": "CS",
							"accountNumber": "0${uniqueCode}-8"
						}, {
							"accountNoType": "FO",
							"accountNumber": "0${uniqueCode}8"
						}, {
							"accountNoType": "TSD",
							"accountNumber": "052000${uniqueCode}8"
						}
					],
					"salesInformation": [{
							"salesRole": "MAIN",
							"salesCode": "98765"
						}
					],
					"commissionCategory": "BOX",
					"cashActivity": "Y",
					"stockActivity": "Y",
					"tradeActivity": "Y",
					"creditLimit": "0.000",
					"custodianInfo": "",
					"approvedDate": "21-05-2018",
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
							"cashSecurity": "",
							"paymentReceipt": "P",
							"wayOfPayment": "",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${uniqueCode}",
							"priority": "1"
						}, {
							"settlementFor": "WIRE_INSTRUCTION",
							"cashSecurity": "",
							"paymentReceipt": "P",
							"wayOfPayment": "ATS",
							"cashLocalCustodianBankCode": "004-0003",
							"cashLocalBankAccountType": "SAVINGS",
							"cashLocalSettlementAccount": "0200${uniqueCode}",
							"priority": "2"
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



module.exports = {
	createCustomer : createAccount
}