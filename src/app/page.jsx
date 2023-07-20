'use client'
import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'
import {HiOutlineCube} from 'react-icons/hi'
import {BsFillTagFill} from 'react-icons/bs'
import Link from 'next/link'
import './globals.css'
import Image from 'next/image'
import {TbSquareRoundedChevronRightFilled} from 'react-icons/tb'
import Readmore from './Components/Readmore'
import SwiperComponent from './Components/Swiper'




export default  function page() {

       const para1 = 'The health news division of NPR is your go-to source for the state of healthcare across the nation and around the world. NPR Shots will keep you in the know about everything from epidemics and public health concerns to the latest news about the insurance industry. You will always be on top of current events in the wellness space if you follow this blog.'
      const para3 = 'Health Affairs is the leading journal of health policy thought & research. The peer-reviewed journal was founded in 1981 under the aegis of Project HOPE. Health Affairs explores health policy issues of current concern in domestic & international spheres.'
      const para4 = 'Sharing successes, challenges and daily happenings in the department of medicine. Johns Hopkins Medicine are committed to promoting biomedical discovery, teaching the next generation of doctors, and improving health in our neighborhood and around the world.'
      const para5 = 'Insights and opinions on the latest medical research, clinical practices, and developments in the field. At BMC, research is always in progress. We are committed to continual innovation to better support the needs of our communities, ensuring the integrity of the research we publish & championing the benefits of open research.'
    
       

  return (
    <div className=''>
      
      <div  className='mt-[150px] md:mx-[200px] sm:mx-[30px]'>
          
          <iframe className='md:w-[1500px] sm:w-[500px]  sm:h-[300px]  md:h-[600px]' src="https://www.youtube.com/embed/RpzxB5bmwmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
     
     
     <div className='flex sm:flex-col  md:flex-row mt-[30px] gap-6'>
      
      <div className='flex flex-col md:ml-[160px] ml-[50px]'>
    <h2 className='text-[50px] text-[#1d2951]  w-[500px] font-bold'>We Take Care Of <br /> Your Health</h2>
     <Link href='/appointment'><button type="submit" className='text-white bg-blue-600 mt-6 border w-[200px] h-[45px] px-2 py-2 hover:bg-white hover:text-blue-500'>Book for schedule</button></Link>
      </div>
      <div className='md:ml-[450px] sm:ml-[50px] w-[500px]'>
      <div>
        <div className='md:flex flex-row'>
      <span className='mt-1'><BsCheckCircleFill size={20} /></span>
      <span className='ml-4 text-xl font-semibold text-[#1d2951] mr-5'>No waiting period</span> 
      <span  className='mt-1'><BsCheckCircleFill size={20}/></span>
      <span className='ml-3 text-xl font-semibold text-[#1d2951]'>Instant Health Reports</span>
      </div>
      
      <p className='mt-[20px]'>We provide always the best of our services for our clients <br /> and listen to what they say about me and about my care <br /> and services.</p>
      </div>
      <div className="flex flex-row space-x-12 mt-5 bg-[#FF8C00] w-[450px] text-white p-4">
        <div className="flex flex-col">
          <span>1k+</span>
          <span>Satisfy Patients</span>
        </div>
        <div className="flex flex-col">
          <span>09</span>
          <span>Expert Doctors</span>
        </div>
        <div className="flex flex-col">
          <span>450</span>
          <span>Patients</span>
        </div>
        </div>
      </div>
     
     </div>

     <div className='md:ml-[160px] sm:ml-[50px] mt-[200px]'>
      <h2 className='text-[40px] text-[#1d2951] w-[500px] font-bold'>How to Get Help <br /> from Us</h2>
      
      <div className='flex sm:flex-col md:flex-row gap-6 mt-[30px]'>
        <div className='border border-[#ffedd5] w-[350px] h-[250px] p-5'>
           <div className=''>
          <AiOutlineCalendar size={20} color='#FF8C00'/>
       </div><br />
       <div className="">
       <h3 className='text-xl text-[#1d2951] font-semibold'>Book an Appointment</h3><br />
       <p>Online or in-center,we take the time to learn all about you and go beyond the symptoms to find the root of your condition.</p>
    </div>
       </div>

        <div className="border border-[#ffedd5] w-[350px] h-[250px] p-5">
        <div className=''>
          <HiOutlineCube size={20} color='#FF8C00'/>
        </div><br />
        <div className="">
        <h3 className='text-xl text-[#1d2951] font-semibold'>Get Personalized lab work</h3><br />
       <p>Online or in-center,we take the time to learn all about you and go beyond the symptoms to find the root of your condition.</p>
       </div>
        </div>
        <div className="border border-[#ffedd5] w-[350px] h-[250px] p-5">
        <div className="">
          <BsFillTagFill size={20} color='#FF8C00'/>
          </div><br />
          <div className="">
            <h3 className='text-xl text-[#1d2951] font-semibold'>Start your plan</h3><br />
            <p>Online or in-center,we take the time to learn all about you and go beyond the symptoms to find the root of your condition.</p>
          </div>
          </div>
          <div className="">
            <Link href="/bmi">
            <p>BMI Calculator</p>
            </Link>
          </div>
          
      </div>
     </div>

     <div className='md:flex md:justify-center md:ml-[160px] ml-[80px] mt-[50px]'>
      <h2 className='text-[40px] text-[#1d2951] w-[500px] font-bold'>Our Top Doctors List With Categories</h2>
     </div>
    
      
      <div className="md:grid md:grid-cols-3 grid-cols-1 mt-[50px] md:ml-[160px] ml-[50px]">
        <div className="md:col-span-2">
        <SwiperComponent />
        </div>
        <div className="md:col-span-1 mt-[200px]">
          <ul>
            <Link href=''>
            <li className='border-b-2 pb-4 text-4xl text-blue-500 w-[350px]'>Dermatologists</li>
            </Link>
           <Link href=''>
           <li className='border-b-2 pb-4 text-4xl mt-[40px] text-blue-500  w-[350px]'>Cardiologists</li>
           </Link>
            <Link href=''>
            <li className='border-b-2 pb-4 text-4xl mt-[40px] text-blue-500 w-[350px]'>Ophthalmologists</li>
            </Link>
            <Link href=''>
            <li className='border-b-2 pb-4 text-4xl mt-[40px] text-blue-500 w-[350px]'>Allergists</li>
            </Link>
            <Link href=''>
            <li className='border-b-2 pb-4 text-4xl mt-[40px] text-blue-500  w-[350px]'>Endocrinologists</li>
            </Link>
           </ul>
           <Link href="/doctors">
           <button className='text-white bg-blue-600 mt-6 border rounded-md w-[200px] h-[45px] px-2 py-2 hover:bg-blue-950 '>View all Doctors</button>
           </Link>
        </div>
       </div>
    
    
    <div className="md:mt-[200px] md:flex md:flex-col md:justify-center md:items-center md:space-y-4 hidden">
      <h2 className='text-[40px] text-[#1d2951] font-bold'>Our Approach</h2>
      <p>Receive your tailored health plan, create <br /> <span className='ml-3'>our Bravaa supplements and more.</span></p>
       <div className="flex flex-row space-x-28">
      <div className="w-[200px]">
        <TbSquareRoundedChevronRightFilled size={100} color='#1d2951'/>
        <h5 className='text-[15px] text-[#1d2951] font-semibold mt-3'>Getting to know you & your health</h5>
        <p className='text-[#1d2951] mt-3'>Your Bravaa health team takes time to know your health</p>
      </div>
      <div className="w-[200px] mt-[100px]">
        <TbSquareRoundedChevronRightFilled size={100} color='#1d2951'/>
        <h5 className='text-[15px] text-[#1d2951] font-semibold mt-3'>In-depth testing and Analysis</h5>
        <p className='text-[#1d2951] mt-3'>Your Bravaa health team takes time to know your health</p>
      </div>
      <div className="w-[200px] mt-[50px]">
        <TbSquareRoundedChevronRightFilled size={100} color='#1d2951' />
        <h5 className='text-[15px] text-[#1d2951] font-semibold mt-3'>Personalized health plan</h5>
        <p className='text-[#1d2951] mt-3'>Your Bravaa health team takes time to know your health</p>
      </div>
      </div>
  </div>
    
    <div className="mt-[100px]">
      <h2 className='md:flex md:justify-center md:items-center text-[40px] text-[#1d2951] font-bold md:ml-[160px] ml-[80px]'>Read Our Latest Blogs</h2>
    </div>

    <div className="md:grid md:grid-cols-2 flex flex-col md:ml-[120px] ml-[20px] mt-[100px] space-y-7">
      
      <div className="flex md:w-[600px] w-[500px] rounded-lg h-[200px]">
        <div className="">
        <Image className="rounded-lg" src='https://images.unsplash.com/photo-1581091013158-5c7184f43b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='laboratory' width={200} height={400}/>
    
       </div>
       <div className="pl-4 pt-5 space-y-5 bg-slate-100 pb-1">
       <h2 className='text-2xl font-semibold'>Health Shots</h2>
       <div className="space-x-3">
       <span className='border bg-slate-300 py-1 px-2'>June 21,2023</span>
       <span  className='border bg-slate-300 py-1 px-2'>NPR</span>
       </div>
       <Readmore text={para1}/>
      </div>
      </div>
      

      <div className="flex w-[600px] rounded-lg"> 
        <div className="">
          <Image className="rounded-lg" src='https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt="hospital" width={200} height={400}/>
        </div>
        <div className="pl-4 pt-5 space-y-5  bg-slate-100 ">
       <h2 className='text-2xl font-semibold'>Health Affairs</h2>
       <div className="space-x-3">
       <span className='border bg-slate-300 py-1 px-2'>June 21,2023</span>
       <span className='border bg-slate-300 py-1 px-2'>NPR</span>
       </div>
       <Readmore text={para3}/>
        </div>
      </div>

      <div className="flex w-[600px] rounded-lg">
        <div className="">
          <Image className="rounded-lg" src='  https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='medicals' width={200} height={400}/>
        </div>
        <div className="pl-4 pt-5 space-y-5 bg-slate-100">
        <h2 className='text-2xl font-semibold'>Medicine Matters</h2>
        <div className="space-x-3">
       <span className='border bg-slate-300 py-1 px-2'>June 21,2023</span>
       <span className='border bg-slate-300 py-1 px-2'>NPR</span>
        </div>
       <Readmore text={para4}/>
        </div>
      </div>

      <div className="flex w-[600px] rounded-lg">
        <div className="">
          <Image className="rounded-lg" src=' https://images.unsplash.com/photo-1581091013158-5c7184f43b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt="hosp" width={200} height={400}/>
        </div>
        <div className="pl-4 pt-5 space-y-5  bg-slate-100">
        <h2 className='text-2xl font-semibold'>Biomedical Central</h2>
       <div className="space-x-3">
       <span className='border bg-slate-300 py-1 px-2'>June 21,2023</span>
       <span className='border bg-slate-300 py-1 px-2'>NPR</span>
       </div>
       <Readmore text={para5}/>
        </div>
      </div>


        
      
        
        
    
    
    
   
   
   
   
   
   
    </div>
    </div>
    
  )
}
