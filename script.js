const dayInput = document.querySelector('input[data-name="day"]')
const monthInput = document.querySelector('input[data-name="month"]')
const yearInput = document.querySelector('input[data-name="year"]')


const submitBTN = document.querySelector('.bar-circle')
const dayOutput = document.querySelector('.result-day')
const monthOutput = document.querySelector('.result-month')
const yearOutput = document.querySelector('.result-year')

const inputs = [dayInput,monthInput,yearInput]


let valid = false

let date = new Date()

let day = date.getDate()
let month = 1 + date.getMonth()
let year = date.getFullYear()

submitBTN.addEventListener('click',()=>{

    inputs.forEach(input=>{
        if(input.value === ''){
            input.parentElement.classList.add('empty')
            valid = false
            return
        }else if(parseInt(input.value) > parseInt(input.max)){
            input.parentElement.className = 'input'
            input.parentElement.classList.add('invalid')
            valid = false
            return
        }else{
            input.parentElement.className = 'input'
            valid = true
        }
    })
    
    if(valid === false){
        return
    }



    var today = new Date();
    var birthdateObj = new Date(yearInput.value, monthInput.value - 1, dayInput.value); // month is 0-indexed in JavaScript
  
    var ageYears = today.getFullYear() - birthdateObj.getFullYear();
    var ageMonths = today.getMonth() - birthdateObj.getMonth();
    var ageDays = today.getDate() - birthdateObj.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageDays < 0) {
      var lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
      ageDays += lastMonthDate;
      ageMonths--;
    }

    console.log(ageYears , ageMonths , ageDays)

    dayOutput.innerHTML = ageDays
    monthOutput.innerHTML = ageMonths
    yearOutput.innerHTML = ageYears

    dayInput.value = ''
    monthInput.value = ''
    yearInput.value = ''
})