// // HTTP Status Code Categorizer
// let apiStatuses=[404,203];
// for (let apiStatus of apiStatuses) {
// if (apiStatus>=200 && apiStatus<300){
//  console.log("Success Response Received");
// }
// else if (apiStatus>=300  && apiStatus<400){
//   console.log("Redirection");
// }
// else if (apiStatus>=400 && apiStatus<500){
//     console.log("Client Error");
// }
// else if(apiStatus>=500 && apiStatus<600){
//  console.log("Server Error");
// }
// else {
// console.log("Inavlid Request");
// }
// }


// Question 2 — Test Case Pass/Fail Verdict
// let testCases = [
//     { actual: "LoginSuccessfull", expected: "LoginSuccessfull" },
//     { actual: "LoginFailed", expected: "LoginSuccessfull" }
// ];

// for (let { actual, expected } of testCases) {
//     if (actual === expected) {
//         console.log("Test Passed ✅");
//     } else {
//         console.log("Test Failed ❌");
//     }
// }

//Question 3 — Bug Severity Classifier

// let bugSeverities=[9,5];
// for (let bugSeverity of bugSeverities) {
// if (bugSeverity>=9 && bugSeverity<10){
//  console.log("Critical (block release)");
// }
// else if (bugSeverity>=7  && bugSeverity<8){
//   console.log("High");
// }
// else if (bugSeverity>=4 && bugSeverity<6){
//     console.log("Medium");
// }
// else if(bugSeverity>=1 && bugSeverity<3){
//  console.log("Low");
// }
// else {
// console.log("Inavlid Score");
// }
// }


// Question 4 — Build Health Reporter

let buildReports=['90%','55%','100%'];
for (buildReport of buildReports){
    if (buildReport==='100%'){
        console.log("Green Build");
    }
    else if (buildReport>='90%' && buildReport<'99%'){
console.log("Stable Investigate Failures");
    }
      else if (buildReport>='70%' && buildReport<'89%'){
console.log("Unstable Build");
    }
    else if (buildReport<='70%'){
console.log("Broken Build");
    }
}

//Question 5 — Login Lockout After Failed Attempts

let loginAttempts=[0,2,3];

for (loginAttempt of loginAttempts){
if (loginAttempt===0){
    console.log("Successfull Login")
}
else if (loginAttempt===2){
    console.log("1 attempt left before lockout");
}
else if (loginAttempt===3){
    console.log("Account Locked 🔒")
}
}