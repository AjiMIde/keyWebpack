require('./images/logo.png')
var we_css = require("./style/style.css");
var we_mod_1 = require("./module/module1.js");
var we_mod_1 = require("./module/module2.js");
var we_json_data = require("./data/data.json");

import We_json_data2 from "./data/data2.json"
import $ from 'jquery'

document.write('I am from entry js...');
document.write(we_mod_1());
document.write(we_json_data.msg + '...');
document.write(We_json_data2.msg + "...")

$('<h3>Hello webpack!! From Jquery</h3>').appendTo('body');
