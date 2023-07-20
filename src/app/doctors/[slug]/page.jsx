'use client'
import React from 'react'
import { doctorsJson } from '../page' 

 function fetchDoctors(params){

    const medicals = doctorsJson.find((medical) => medical.id == params.slug)
    

    return medicals
}

export default async function page({params}) {
const medicals = fetchDoctors(params)

  return (
    <div className='mt-[150px] h-screen'>
        <h1>{`About Ajobi ${medicals.name}`}</h1> 
    </div>
  )
}
