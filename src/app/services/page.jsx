import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='mt-[150px] mx-[50px]'>
       <h1 className='flex justify-center text-[60px] font-bold text-[#1d2951]'>OUR SERVICES</h1>
       
      <div className='grid grid-cols-2 mt-[50px]  space-x-12'>
        <div className="s">
       <p>Our  medical center offers a wide range of medical specialties, covering various fields of healthcare. Some of the prominent specialties
         include:</p><br />
       <ol className='list-[upper-roman] '>
        <li>
         <span className='font-semibold text-[#1d2951]'>Cardiology:</span> The center boasts a specialized cardiology department that provides comprehensive cardiac evaluations, diagnosis, and treatment
           of cardiovascular diseases. State-of-the-art cardiac catheterization labs and advanced imaging technologies ensure accurate diagnosis and
            effective interventions.</li><br />
        <li>
      <span className='font-semibold text-[#1d2951]'>Oncology:</span> We have a renowned oncology department, specializing in the diagnosis and treatment of various types of cancer. 
        The center is equipped with cutting-edge radiation therapy, chemotherapy, and surgical facilities, enabling a multidisciplinary approach to 
        cancer care.
        </li><br />
        <li>
      <span className='font-semibold text-[#1d2951]'>  Neurology:</span> The neurology department at Hope Medical Center focuses on the diagnosis and treatment of neurological disorders, including 
        stroke, epilepsy, Parkinson's disease, and multiple sclerosis. Expert neurologists work closely with patients, providing advanced diagnostic
         techniques and personalized treatment plans.
        </li><br />
        <li>
        <span className='font-semibold text-[#1d2951]'>Orthopedics:</span> With a dedicated orthopedics department, the center offers specialized care for bone and joint-related conditions. Skilled 
        orthopedic surgeons perform complex joint replacements, arthroscopic surgeries, and provide rehabilitation services to restore mobility and
         improve quality of life.
        </li><br />
        <li>
       <span className='font-semibold text-[#1d2951]'> Paediatrics:</span> We take pride in its pediatric department, dedicated to providing comprehensive medical care for children and 
        adolescents. Highly trained pediatricians offer routine check-ups, immunizations, and specialized treatments for various pediatric conditions,
         ensuring the well-being of young patients.
   </li><br />
       </ol>
       </div>
       <div >
  <Image className='rounded-3xl' src='https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' alt="surgery" width={700} height={800} />
  </div>
  </div>


<div>
       <p className='font-semibold text-3xl text-[#1d2951]'>Additional Services:</p><br />
<ul>
  <li>
  <span className='font-semibold text-[#1d2951]'>Diagnostic Imaging:</span> The center is equipped with advanced imaging technologies, including MRI, CT scan, ultrasound, and X-ray, enabling accurate 
  diagnosis and monitoring of various conditions.
</li><br />
<li>
<span className='font-semibold text-[#1d2951]'>Laboratory Services:</span> Hope Medical Center has an in-house laboratory equipped with cutting-edge equipment to perform a wide range of diagnostic tests,
 providing quick and accurate results to aid in the diagnosis and treatment process.
</li><br />
<li>
<span className='font-semibold text-[#1d2951]'>Rehabilitation:</span> The center offers comprehensive rehabilitation services, including physical therapy, occupational therapy, and speech therapy. These 
services help patients recover from injuries, surgeries, or neurological conditions, enhancing their functionality and independence.
</li><br />
<li>
<span className='font-semibold text-[#1d2951]'>Wellness Programs:</span> Recognizing the importance of preventive care, Hope Medical Center offers wellness programs and health screenings to promote 
healthy lifestyles and disease prevention among its patients.
</li><br />
</ul>
</div>









    </div>
  )
}
