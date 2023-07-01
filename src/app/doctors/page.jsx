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
  const response = await fetch('https://raw.githubusercontent.com/samiat21/data-json/main/data.json')

  const data = await response.json()

  doctorsJson = data.slice()
  return data
}

export default async function page() {
  const data = await fetchdoctors()
  const dlist = data.map(doctor =>(
       <div key={doctor.id}>
        <Link href={`/doctors/${doctor.name}`} title={`click to view more information about ${doctor.name}`} >
        <Image className='rounded-2xl hover:bg-slate-400' src={doctor.image} alt={doctor.name} width={350} height={350} />
      <div className="mt-6">
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      {/* <p className='w-[350px]'>{doctor.job_description}</p> */}
      </div>
      </Link>
    </div>

  ))
  return (
   <div className="mt-[150px]">
    <div className={satis.className}>
      <h1 className='flex justify-center text-5xl'>OUR DOCTORS</h1>
    </div>
     <div className='grid grid-cols-3 mt-[100px] ml-20 space-y-7'>
      {doctorsJson[3].name}
      {dlist}
    </div>
   </div>
  )
}
