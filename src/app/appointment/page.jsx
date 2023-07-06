import React from 'react'


export default function page() {
  return (
    <div className='mt-[150px] flex flex-col justify-center items-center'>
        <div className="space-y-4 bg-blue-500 w-[900px] h-[500px] p-12">
        <div className="">
          <h1 className='text-3xl text-[#1d2951]'>APPOINTMENT FORM</h1>
        <p className='text-xl text-[#1d2951]'>Free Consultation</p>
        </div>
            <div className="">
              <form className="space-y-7">
                <input className='h-[30px] w-[600px] pl-2' type="text" name="fname" id="fname" placeholder='Your full name' /><br />
                <input className='h-[30px] w-[600px] pl-2' type="tel" name="pnum" id="pnum" placeholder='Phone Number' /><br />
                <select className='h-[30px] w-[500px] pl-2'>
                  <option value="select-services" selected>Select Services</option>
                  <option value="consultation">Consultation</option>
                  <option value="Maternity">Maternity</option>
                  <option value="appointment">Appointment</option>
                </select><br />
                <input className='h-[30px] w-[500px] pl-2' type="date" name="date" id="date" placeholder='Date'/><br />
                <input className='h-[30px] w-[500px] pl-2' type="time" name="time" id="time" placeholder='Time' />
          </form><br />
          <button className='bg-white p-1 text-[#1d2951] hover:bg-blue-500 hover:text-white' type="submit">Submit</button>
            </div>
        </div>
    </div>
  )
}
