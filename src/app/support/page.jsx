import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import {LuMailCheck} from 'react-icons/lu'
import {MdAddIcCall} from 'react-icons/md'

export default function page() {
  return (
    <div className='mt-[150px]'>
      <div className="grid md:grid-cols-3 grid-cols-1 ml-[50px] md:space-x-6 space-y-6 mr-10">
        <div className="flex flex-row bg-[#1d2951] text-white px-6 py-6 space-x-4">
          <span><CiLocationOn size={40} /></span>
          <span>3, Ewu-Owa close, Gberigbe, Ikorodu, Lagos state,<br /> Nigeria.</span>
        </div>
        <div className="flex flex-row bg-[#1d2951] text-white px-6 py-6 space-x-4">
          <span><LuMailCheck size={40} /></span>
          <span><a href={`mailto:${'samiatusman96@gmail.com'}`}>samiatusman96@gmail.com</a></span>
        </div>
        <div className="flex flex-row bg-[#1d2951] text-white px-6 py-6 space-x-4">
          <span><MdAddIcCall size={40} /></span>
          <span><a href={`tel:${'(+234) 816 224 3940'}`}>(+234) 816 224 3940</a></span>
        </div>
      </div>
        
        <div className='grid md:grid-cols-2 grid-cols-1 mt-[50px] space-x-8 ml:[30px] sm:ml-[50px] md:ml-[50px]'>
          <div className=' mt-[50px] '>
          <h2 className='text-[30px] text-[#1d2951] font-bold'>Contact Form</h2>
          <form className='flex flex-col space-y-6'>
            <label htmlFor="fname">Full Name <span>:</span></label>
            <input className='border' type="text" name="fname" id="fname" />
            <label htmlFor="pnumber">Mobile Number <span>:</span></label>
            <input className='border' type="tel" name="pnumber" id="pnumber" />
            <label htmlFor="email">Email Address <span>:</span></label>
            <input className='border' type="email" name="email" id="email" />
            <label htmlFor="address">Message <span>:</span></label>
            <textarea className='border h-[200px]' name="address" id="address"></textarea>

          </form><br />
          <button className='bg-blue-600 border px-2 py-2 text-white hover:text-blue-500 hover:bg-white' type="submit">Submit</button>
          </div>
          <div className='sm:mt-[50px] mt-[30px]'>
          <iframe className='sm:w-[500px] w-[400px] md:w-[800px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.349889622719!2d3.6047752614678847!3d6.603368772200631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be5a6ec9baae7%3A0xf8674f5c17d32f36!2sBEYOND%2021ST%20HOSPITAL%20EWU%20OWA!5e0!3m2!1sen!2sng!4v1688062022521!5m2!1sen!2sng" width="800" height="750" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>








    </div>
  )
}
