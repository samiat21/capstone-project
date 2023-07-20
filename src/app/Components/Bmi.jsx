import React from 'react'


     

function bmi() {

    
const weight = document.getElementsByClassName("weight")
const height = document.getElementsByClassName("height")
const button = document.getElementsByClassName("btn")
const para = document.getElementsByClassName("result")
    
let w = weight.value
    let h = height.value / 100
    let status
    const val = w / Math.pow(h, 2)

    val >= 30 ? (status = "obese") : val >= 25 || val <=29.9 ? (status = "overweight") : val >= 18.5 || val >= 24.9 ? (status = "normal weight") : (status = "underweight")

    return(
        (para.textContent = `Your BMI is ${val.toFixed(2)} and you are ${status}`)

    )

}
   
// button.addEventListener("click", bmi)

export default function Bmi() {


    return (
        <div>
</div>
  )
  
}











