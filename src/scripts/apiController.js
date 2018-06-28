const $ = require("jquery")

const apiController = Object.create({}, {
    getPolitician: {
        value: function(){
            return $.ajax("http://localhost:3000/politician")
        }
    },
    getBills: {
        value: function(billId){
            return $.ajax(`http://localhost:3000/bills?billId=${billId}`)
        }
    }
})

module.exports = apiController




//Corporations Table
//bill/politician table
//politician/PAC table
//PAC/corporation table
//interests table