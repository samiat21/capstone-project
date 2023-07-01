'use client'
import React from 'react'
import { doctorsJson } from '../page'

function fetchDoctors(params){

    const doctors = doctorsJson.find((doctor)=>doctor.id === params.slug)

    return doctors
}

export default async function page({params}) {
    const doctor = fetchDoctors(params)
  return (
    <div className='mt-[150px]'>
        <h1>About {doctor.name} </h1>
    </div>
  )
}
