var oracledb = require('oracledb');
oracledb.getConnection(
  {
    user          : "gvth_dev_gmo_txn",
    password      : "gvth_dev_gmo_txn",
    connectString : "localhost/XE"
  },
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "select * from cam_margin_valuation",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
    }
)