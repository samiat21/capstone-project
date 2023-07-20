import React from 'react'

async function doctorsname(){
    const response = await fetch('https://raw.githubusercontent.com/samiat21/data-json/main/data.json')
    const data = await response.json()

    return data
}

export default async function Doc() {
    const data = await doctorsname()
    const sam = data.map(doctor =>(
        <div key={doctor.id}>{doctor.name}</div>
    ))
  return (


    <div>{sam}</div>
  )
}
