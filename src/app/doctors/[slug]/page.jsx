'use client'
import React from 'react'
import { doctorsJson } from '../page' 
import Image from 'next/image'
import Link from 'next/link'


   function fetchdoctors(params){
   const medicals = doctorsJson.find((medical) => medical.id == params.slug)
           
           return medicals
         }
export default async function page({params}) {
  const medicals = fetchdoctors(params)
  return (
    <div className='mt-[200px] h-screen'>
        <h1 className='flex justify-center items-center text-[50px]'> {medicals.name}</h1>


        <div className="flex md:flex-row flex-col ml-[100px]  md:ml-[300px]">
          <Image className='rounded-full mt-[50px]' src={medicals.image} alt={medicals.name} width={350} height={350}/>
         
          <div className="md:mt-[250px] mt-[50px] md:ml-[50px] ml-[10px] space-y-3 w-[90vh] h-[150px]">
            <h3 className='text-[40px]'>{medicals.specialty}</h3>
            <p>{medicals.job_description}</p>
          </div>

          <div className='md:flex md:flex-col grid grid-cols-3 space-y-3 mt-[50px] transition-[1s]'>
          <Link href='/doctors/1' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Michelle Anderson</span></Link>
          <Link href='/doctors/2' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Christopher Martinez</span></Link>
          <Link href='/doctors/3' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Samantha Thompson</span></Link>
          <Link href='/doctors/4' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Benjamin Wilson</span></Link>
          <Link href='/doctors/5' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Elizabeth Garcia</span></Link>
          <Link href='/doctors/6' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Jonathan Clark</span></Link>
          <Link href='/doctors/7' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Victoria Nguyen</span></Link>
          <Link href='/doctors/8' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. Daniel Wright</span></Link>
          <Link href='/doctors/9' title="Click to know more"><span className='underline text-blue-500 hover:text-blue-950 hover:scale-[1.2]'>Dr. James Harris</span></Link>
     </div>
        

         
    </div>
    </div>
  )
}
