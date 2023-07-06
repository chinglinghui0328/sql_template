const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})


const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

// let sql = `
// CREATE TABLE IF NOT EXISTS Users(
//     ID TEXT PRIMARY KEY,
//     Username TEXT,
//     Emali TEXT,
//     DOB TEXT
// )
// `

let show =`
SELECT name FROM pragma_table_info("Users");
`

let rename =`
ALTER TABLE Users
RENAME COLUMN id TO ID
`

let insert =`
INSERT INTO Users(ID, Username, EMALI, DOB)
VALUES ("1234567" , "Timmy", "timmy@failure.org", "2005-10-28");
`

let select =`
SELECT * FROM Users
WHERE Username = "Bob";
`

let update =`
UPDATE Users
SET EMALI = "timmy@success.org"
WHERE ID = "1234567"
`
let dele =`
DELETE FROM Users
WHERE ID = "1234567";
`

db.all(dele, CallbackFunc);


// 