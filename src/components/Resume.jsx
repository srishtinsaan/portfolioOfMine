import React from 'react'

function Resume() {
  return (
     <div className=''>

      {/* Experience */}
      <div className='w-full min-h-[80px]  '>
        <h1 className='text-2xl  
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Experience</h1>

      <div className='w-full min-h-[50px] '>
        <div className='flex place-content-between'>
           <h2 className='text-lg'>Technical Content Writer</h2>
           <h3 className='text-sm text-gray-300'>Remote</h3>
        </div>
        <div className='flex place-content-between'>
          <h3 className='text-gray-300 text-sm'>Cloudastra Technologies</h3>
          <h3 className='text-gray-300 text-sm'>Dec 2023 - May 2024 • 6 Months</h3>
      </div>
        
        <h3 className='text-gray-300 text-sm'>Noida, Uttar Pradesh, India</h3>
      </div>
      </div>
      
      {/* Education */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl  
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5  font-semibold'>Education</h1>
      
     
     {/* college */}
       <div className='flex place-content-between'>
           <h2 className='text-lg'>B.Tech. , Computer Science & Engg.</h2>
           <h3 className='text-sm text-gray-300'>July 2023 - Present</h3>
        </div>
        <div className='flex place-content-between'>
          <h3 className='text-gray-300 text-sm'>JECRC University</h3>
          <h3 className='text-gray-300 text-sm'> Current CGPA : 9.1</h3>
        </div>
        
        <h3 className='text-gray-300 text-sm mb-5'>Jaipur, Rajasthan, India</h3>


        {/* school */}
        <div className='flex place-content-between'>
           <h2 className='text-lg'>Intermediate</h2>
           <h3 className='text-sm text-gray-300'></h3>
        </div>
        <div className='flex place-content-between'>
          <h3 className='text-gray-300 text-sm'>GR Global Academy</h3>
          <h3 className='text-gray-300 text-sm'></h3>
        </div>
        <h3 className='text-gray-300 text-sm'>Jaipur, Rajasthan, India</h3>
       
      </div>


      {/* Achievements */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Achievements</h1>
        <div className=''>
          <ul className='list-disc pl-5'>
            <li>Global Nominee at NASA Space Apps Challenge 2024</li>
            <li>Author of my unpublished book : <a  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13VMtegE0_b3yCNFavodmQTqT3bdRBF7r/view?usp=sharing" className='italic hover:text-blue-400' >14th Moon</a></li>
          </ul>
        </div>
      </div>


      {/* Co-Curricular Activities */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Co-Curricular Activities</h1>

        {/* IAESTE */}
        <div className='flex place-content-between'>
           <h2 className='text-lg'>Local Commitee Team Member</h2>
           <h3 className='text-sm text-gray-300'>Dec 2023 - Sep 2024 • 10 Months</h3>
        </div>
        <div className='flex place-content-between'>
          <h3 className='text-gray-300 text-sm'>IAESTE India LC JECRC</h3>
          <h3 className='text-gray-300 text-sm'> Corporate Relations & Marketing Department</h3>
        </div>
        <h3 className='text-gray-300 text-sm mb-5'>JECRC University</h3>

        {/* JU Verse */}
        <div className='flex place-content-between'>
           <h2 className='text-lg'>Content Writer</h2>
           <h3 className='text-sm text-gray-300'>Oct 2023 - Aug 2024 • 11 Months</h3>
        </div>
        <div className='flex place-content-between'>
          <h3 className='text-gray-300 text-sm'>JU Verse</h3>
          <h3 className='text-gray-300 text-sm'></h3>
        </div>
        <h3 className='text-gray-300 text-sm mb-5'>JECRC University</h3>
      </div>
         
    </div>
  )
}

export default Resume
