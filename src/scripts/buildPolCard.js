const apiController = require("./apiController")
const $ = require("jquery")

const buildPolCard = () => {
    const mainDivEl = $("#main-div")
    apiController.getPolitician().then(politicianArray => {
        politicianArray.forEach(politician => {
            mainDivEl.append($(`<section id=${politician.polId}><h1>${politician.name}</h1><h3>Sponsored Bills</h3></section>`))
            politician.bills.forEach(bill => {
                // console.log(bill)
                apiController.getBills(bill).then(billResponse => {
                    // console.log("bill name:", billResponse[0].billName)
                    $(`#${politician.polId}`).append($(`<h4>${billResponse[0].billName}</h4>`))
                    const listElement = $("<ul></ul>")
                    $(`#${politician.polId}`).append(listElement)
                    billResponse[0].interests.forEach(interest =>{
                        // console.log(interest)
                        listElement.append($(`<li>${interest}</li>`))
                    })
                })
            })
        });
    })
}

module.exports = buildPolCard