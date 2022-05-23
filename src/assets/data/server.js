/* eslint-env es6 */
/* eslint-disable no-console */

// const express = require('express')
// const app = express()

// const PORT = 8100

// app.listen(PORT, () => console.log(`listening at  https://localhost:${PORT}`))
// app.use(express.static('public'))

"use strict";
// class AddCard{

  function hello() {
    const card = {
      id: "NF1",
      title: "NF1 Bank",
      logo: "assets/icon/standard@2x.png",
      service: "assets/icon/Icon simple-mastercard@2x.png",
      content: "4587 4458 3094",
      masked: "**** **** **** 3094",
      firstname: "Dennis",
      lastname: "Takyi",
      expiry: "03/26",
      cvvMasked: "***",
      cvv: 341,
      category: "banking",
      status: true
    }

  const fs = require('fs')

  let data = fs.readFileSync('src/assets/data/addCard.json')
  bankCards = JSON.parse(data);

  bankCards.push(card)

  const saveData = (bankCards) =>{
    var finished = (error) => {
      if (error) {
        console.error(error)
        return;
        }
      }
    var jsonData = JSON.stringify(bankCards);
    fs.writeFileSync('src/assets/data/addCard.json', jsonData, finished)
  }

    saveData(bankCards)
    alert(bankCards)

 }
//  hello();
// }
