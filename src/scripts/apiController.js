const $ = require("jquery")

const apiController = Object.create({}, {
    getPolitician: {
        value: function(){
            return $.ajax("http://localhost:3000/politician")
        }
    },
    getBillsArray: {
        value: function(polId){
            return $.ajax(`http://localhost:3000/billPolitician?_expand=bill&polId=${polId}`)
        }
    },
    getBillsName: {
        value: function(billId){
            return $.ajax(`http://localhost:3000/bills?billId=${billId}`)
        }
    },
    getPacs: {
        value: function(polId){
            return $.ajax(`http://localhost:3000/politicianPac?_expand=pac&polId=${polId}`)
        }
    }
})

module.exports = apiController