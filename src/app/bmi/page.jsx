'use client'
import React, { useState } from 'react'


export default function Bmi() {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')

    let calcBmi = (event) => {

        //Don't submit
        event.preventDefault ()

        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height')
        }
        else{
            let bmi = (weight / (height**2))
            setBmi(bmi.toFixed(2))
        

             //response message

           if (bmi >= 30) {
            setMessage ("You are obese!")
        }
        else if (bmi >= 25 || bmi == 29.9) {
            setMessage ("You are overweight!")
         } 
         else if (bmi >= 18.5 || bmi == 24.9) {
            setMessage ("You have a normal weight!") 
         }
         else{
            setMessage ("You are underweight!")
         }

        }
    }
    let reload = () =>{
        window.location.reload()
    }



    return (
        <div>
            <div className="mt-[250px] md:ml-[400px] sm:ml-[100px] ml-[30px] space-y-6 bg-inherit p-10 w-[30vh] sm:w-[50vh] md:w-[70vh] border-4 rounded-3xl border-blue-500">
           <p className='font-bold text-2xl text-blue-500 md:ml-[150px] sm:ml-[50px] uppercase'>BMI Calculator</p>
           <p className='text-blue-500 text-lg md:ml-[100px] sm:ml-[20px]'> Just enter your weight(kg) and height(m) !</p>
           <form onSubmit={calcBmi}>
           <input value={weight} onChange={(e) => setWeight(e.target.value)} className='p-1 border-b-4 text-black' type="number" name="weight" id="weight" placeholder='Your weight in Kg' required/><br /><br />
           <input value={height} onChange={(e) => setHeight(e.target.value)} className='p-1  border-b-4 text-black' type="number" name="height" id="height" placeholder='Your height in metres' required/><br /><br />
           <div className="space-x-4">
           <button type='submit' className='btn bg-blue-500 p-2 hover:bg-[#1d2951] hover:text-white'>Check</button>
           <button type='submit' className='btn bg-blue-500 p-2 hover:bg-[#1d2951] hover:text-white' onClick={reload}>Reset</button>
           </div>
           </form>
           <p>Your BMI is {bmi}</p>
           <p className='result text-blue-950'>{message}</p>
          </div>
</div>
  )
  
}











