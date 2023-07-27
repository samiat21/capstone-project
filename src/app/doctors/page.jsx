'use client'
import Image from 'next/image'
import React from 'react'
import { Satisfy } from 'next/font/google'
import Link from 'next/link'

const satis = Satisfy(
  {
    subsets: ['latin'],
    weight: ['400']
  }
)



export let doctorsJson = []
  
async function fetchdoctors(){
  const response =await fetch('https://raw.githubusercontent.com/samiat21/data-json/main/data.json',
  {
    cache:"no-cache"
  })

  const data = await response.json()
  
  doctorsJson =  data.slice()

  return data
}
  

      

export default async function page() {
  const data = await fetchdoctors()
 
  const dlist = data.map((doctor) =>(
       <div key={doctor.id} className='transition-[1s]'>
        <Link href={`/doctors/${doctor.id}`} title={`click to view more information about ${doctor.name}`} target='_blank' >
        <Image className='rounded-2xl hover:scale-[1.2] hover:z-[2] hover:opacity-[0.5] cursor-pointer' src={doctor.image} alt={doctor.name} width={350} height={350} />
      <div className="mt-6">
      <h2 className='text-[30px]'>{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      </div>
      </Link>
    </div>

  ))
  return (
   <div className="mt-[150px]">
    <div className={satis.className}>
      <h1 className='flex justify-center text-5xl'>OUR DOCTORS</h1>
    </div>
    <section className= {satis.className}>
     <div className='grid md:grid-cols-3 grid-cols-1 mt-[100px] md:ml-20 mx-40 space-y-7'>
      {dlist}
    </div>
    </section>
   </div>
  )
}
