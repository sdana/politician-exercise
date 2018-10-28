const apiController = require("./apiController")
const $ = require("jquery")

const buildPolCard = () => {
    const mainDivEl = $("#main-div")
    apiController.getPolitician().then(politicianArray => {
        politicianArray.forEach(politician => {
            mainDivEl.append($(`<section id=${politician.polId}><h1>${politician.name}</h1><h2>Sponsored Bills</h2></section>`))
            apiController.getBillsArray(politician.polId).then(billsArray => {
                new Promise((resolve, reject) => {
                    billsArray.forEach(bill => {
                            const ulElement = $("<ul></ul>")
                            $(`#${politician.polId}`).append($(`<h3>${bill.bill.billName}</h3>`)).append(ulElement)
                                for (let i in bill.bill.interests){
                                ulElement.append($(`<li>${bill.bill.interests[i]}</li>`))
                            }
                        })
                        resolve("done")
                    })
                }).then(() => {
                    $(`#${politician.polId}`).append("<h2>PAC Affiliations</h2>")
                    apiController.getPacs(politician.polId).then(response =>{
                        const ulEl = $("<ul></ul>")
                        for (let i in response){
                            console.log(response[i].pac.pacName)
                            ulEl.append($(`<li>${response[i].pac.pacName}</li>`))
                        }
                        $(`#${politician.polId}`).append(ulEl)
                    })
                })
        })
    })
}
module.exports = buildPolCard                        // console.log(response)
