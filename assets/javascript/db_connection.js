let mysql = require("mysql2");
let localhost = "localhost";
let yourusername = "root";
let yourpassword = "4u3p7px6";

let con = mysql.createConnection({
  host: localhost,
  user: yourusername,
  password: yourpassword,
  database: "axioma",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM condomino", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
