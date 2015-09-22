/*
Given a sequence of integers, classify the sequence based on certain properties based on the following properties
Rule 1: If sequence is ascending with no repeated values, return USEFUL
Rule 2: If sequence is descending with no repeated values, return USEFUL_REVERSE
Rule 3: If sequence is ascending with repeated values, return USEFUL_REPEATED
Rule 4: If sequence is descending with repeated values, return USEFUL_REVERSE_REPEATED
Rule 5: If none of the above condition is met return NOISE
*/

function processData(input) {
    //Enter your code here
    //Standard output
    //console.log(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    //Standard input
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
