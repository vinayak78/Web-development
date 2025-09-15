// okie sso we have two type of modules in node js one is common js and another is es6


// es6 
// import {a} from "./module.js"
// import {b} from "./module.js"
// import {c} from "./module.js"
// import {d} from "./module.js"
// import {greeting} from "./module.js"
// console.log(a , b , c , d);
// greeting();


// commom js (older way of importing modules)
// const ntg = require("./module.js");
// ntg();
// console.log(__dirname , __filename);

// default 
// import somthing from "./module.js"
// somthing();

// __dirname , __filename dont exit in es6+ we can built it like this
import {a} from "./module.js"
import {fileURLToPath} from "url"
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(a , __filename , __dirname);