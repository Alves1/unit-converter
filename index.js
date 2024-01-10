/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const inputNumber = document.getElementById("numEntered")
const convertBtn = document.getElementById("convert-btn")


const lengthRes = document.getElementById("length-results")
const volumeRes = document.getElementById("volume-results")
const massRes = document.getElementById("mass-results")

const lengthRatio = 3.28084  
const volumeRatio = 0.264172
const massRatio = 2.20462

window.convertNum = convertNum

convertBtn.addEventListener('click', convertNum)


function convertNum() {
    let inputValue = Number(inputNumber.value)
    let meterToFeet = 0
    let feetToMeter = 0
    let literToGallon = 0
    let gallonToLiter = 0
    let kiloToPound = 0
    let poundToKilo = 0
    
     meterToFeet = (inputValue * lengthRatio).toFixed(3)
     feetToMeter = (inputValue / lengthRatio).toFixed(3)
     lengthRes.textContent = `
     ${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`
     
     literToGallon = (inputValue * volumeRatio).toFixed(3)   
     gallonToLiter = (inputValue / volumeRatio).toFixed(3)
     volumeRes.textContent = `
     ${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${gallonToLiter} liters`
     
     kiloToPound = (inputValue * massRatio).toFixed(3)
     poundToKilo = (inputValue / massRatio).toFixed(3)
     massRes.textContent = `
     ${inputValue} kilos = ${kiloToPound} pounds | ${inputValue} pounds = ${poundToKilo} kilos`
}

