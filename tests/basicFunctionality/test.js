"use strict";

exports.check = function (res) {
    console.log(`got input [${res.join(", ")}]`);
    if (res.length != 3) return 1;
    if (res[0] != "line 1") return 2;
    if (res[1] != "line 2") return 3;
    if (res[2] != "line 3") return 4;
    return 0;


};