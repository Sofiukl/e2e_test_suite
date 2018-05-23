const util = require('util');
const exec = util.promisify(require('child_process').exec);


const BASE_PATH = "D:\\code\\igv\\nrithai\\BR-GV-THAGMO-PROD-02102017\\console\\igv-console\\"




async function execute(batchName , args) {
  const { stdout, stderr } = await exec(`${BASE_PATH}launch.bat -e GMO ${batchName} ${args}`);
  //const { stdout, stderr } = await exec(BASE_PATH+'launch.bat -e GMO TRD/TaxAndCommCalculator -d 20180402 -a C0012345699-8');
  //TRD/ExecutionToTrade
}



module.exports={
    execute : execute
}