var LineReader = require('line-by-line-promise');

var file = new LineReader('TABLE_FKLINKED_CONSTRAINT.txt');

var fkTableColumnFile = new LineReader('FK_TABLE_COLUMN.txt');
 
var fkDependency = {}

var detailsByConstraint = {}


tableAgainstColumnForPk = {}


async function x(){



// note that eof is defined when `readLine()` yields `null`
while((line =await  file.readLine()) !== null) {
    arr = line.split(',')
    if(fkDependency[arr[0]]==undefined){
        fkDependency[arr[0]]=[]
    }
    fkDependency[arr[0]].push(arr[1])

}
///populated

// note that eof is defined when `readLine()` yields `null`
while((line =await  fkTableColumnFile.readLine()) !== null) {
    arr = line.split(',')
    if(detailsByConstraint[arr[0]]==undefined){
        detailsByConstraint[arr[0]]=[]
    }
    if(tableAgainstColumnForPk[arr[1]]==undefined){
        tableAgainstColumnForPk[arr[1]]=[]
    }
    detailsByConstraint[arr[0]].push({table : arr[1] , column : arr[2]})
    
    
    if(arr[0].startsWith('PK')){
        tableAgainstColumnForPk[arr[1]].push(arr[2])
    }

}


var tableName = 'REF_CUSTOMER_AUDIT_TRANSACTION'

//pk for 

var whereClause = "select "+tableAgainstColumnForPk[tableName][0]+" from "+tableName+" where "
 
for(x in fkDependency[tableName]){
    xxx = fkDependency[tableName][x]


    
for( var key in detailsByConstraint[xxx]){

    xaer = detailsByConstraint[xxx][key];
    console.log(`delete from ${xaer.table} where ${xaer.column} = (${whereClause} customer_code = 'XXXXXXXXXX');`);
    
}
}

//console.log();




}

x()