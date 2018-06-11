import {ReportData} from './report/ReportData';
import { ReportType } from './report/IReportType'
import { Report } from './report/Report'
import * as assert from 'assert';

process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
});


let testCase1 = async () => {
        let result:any = await new Report('RELPL', ReportType.DELIMETER_SEPARATED)
                        .execute('reportCommand')
                        .query(['close_out_qty', 'account_no'], { account_no: 'CSOFIKUL12' });
        console.log(result);

        assert.deepEqual(result['close_out_qty'], '75' , '[FAIL] Close out quantity should be 75');
}

// let testCase2 = async () => {
//         let result = await new Report('STBAL', ReportType.DELIMETER_SEPARATED)
//                         .execute('reportCommand')
//                         .query(['execution_qty', 'account_no'], { account_no: 'CCLIENT12-8' });
//         console.log(result);

//         assert.deepEqual(result['execution_qty'], '100' , '[FAIL] Close out quantity should be 100');
// }

testCase1();
//testCase2();