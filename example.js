"use strict"
var hypospray = require("./hypospray")

hypospray.service({
    name:"logger",
    inject:[],
    factory: function() {
        return {
            log: function(text){
                console.log("hypospray example: " + text)
            }
        }
    }
})
hypospray.service({
    name: "main",
    inject: ["logger"],
    factory: function(logger) {
        return function() {
            logger.log("hello hypospray!")
        }
    }
})

var main = hypospray.injectService("main")
main()