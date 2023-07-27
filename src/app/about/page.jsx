import Image from 'next/image'
import React from 'react'
import { Barlow } from 'next/font/google'
import css from './about.module.css'


const about = Barlow (
  {
    subsets: ['latin'],
    weight: ['500']
  }
)

export default function page() {
  return (
    <div className={about.className}> 
    <main className='mx-10'>
        <h1 className='md:flex md:justify-center ml-[50px] md:ml-[150px] mt-[150px] text-[60px] font-bold text-[#1d2951]'>ABOUT US</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-[60px]">
        <div className=" md:ml-10 mr-3 col-span-1">
        <div className={css.hosp}></div>

        </div>
        <div className="mt-[150px] text-lg col-span-1 sm:mr-5">
        <p>
        Our hospital is a renowned healthcare institution dedicated to providing comprehensive medical services and compassionate care to 
        patients. Established in 1975, the center has been a beacon of hope for individuals seeking top-quality medical treatment and support. 
        Located in a serene and accessible location, Hope Medical Center has grown to become a leading medical institution, equipped with 
        state-of-the-art facilities and a team of highly skilled healthcare professionals.
        </p> <br /><br />

        <h3 className='md:ml-[300px] ml-[100px] sm:ml-[200px] text-2xl text-[#1d2951]'> Our Mission</h3><br />
        <p>Our mission is to deliver exceptional medical care, promote health and wellness, and enhance the quality of life 
            for all patients. With a patient-centric approach, the center strives to provide personalized attention, evidence-based treatments, 
            and a supportive environment that fosters healing and recovery.</p><br />
         
      </div>
      </div>
      </main> 
      
    </div>
  )
}
