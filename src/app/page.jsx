import React from 'react'


export default function page() {
  return (
    <div>
      <div>
          <video  className='w-[1200px] mt-[50px] h-[400px] ml-[80px]' controls>
            <source src='./media/doctor2patient.mp4' type='video/mp4' />
          </video>
     </div>
     
     
     <div className='flex flex-row mt-[30px]'>
      <div className='flex flex-col ml-[80px]'>
    <h2 className='text-[40px] text-[#1d2951] font-bold'>We Take Care Of <br /> Your Health</h2>
     <button type="submit" className='text-white bg-[#1d2951] mt-6 border-2'>Book for schedule</button>
      </div>
     </div>
    </div>
  )
}
