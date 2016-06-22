"use strict";
let options = {
    "bindings": "cin.node",
    "module_root": __dirname + "/native"
};
let addon = require("bindings")(options);

module.exports = function cin() {
    return addon.cin();
};