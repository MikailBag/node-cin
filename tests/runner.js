"use strict";

const cp = require("child_process");
const fs = require("fs");
const os = require("os");

const all_tests = ["basicFunctionality"];

let tests;
if (process.argv.length <= 2){
    tests = all_tests
} else{
    tests = process.argv.slice(2)
}

console.log(`running tests: ${tests}`);
for (let test of tests){
    console.log(`running test ${test}`);
    let check = require(`./${test}/test.js`).check;
    let input = fs.readFileSync(`./${test}/input.in`);
    console.log(`input is ${input}`);
    let output = cp.execSync("node helper.js 3",{input:input}).toString();
    console.log(`output is ${output}`);
    let status = check(output.split(os.EOL));
    console.log(`status is ${status}`)
}