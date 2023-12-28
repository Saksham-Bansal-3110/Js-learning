const accountID = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121221"
accountCity = "bangaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountState, accountCity])