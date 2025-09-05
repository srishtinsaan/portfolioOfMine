import React from 'react'

function Resume() {
  return (
     <div className=''>

      {/* Experience */}
      <div className='w-full min-h-[80px]'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl  
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Experience</h1>

      <div className="w-full min-h-[50px] space-y-1">
    {/* Role */}
    <div className='flex flex-col'>
    <div className="flex place-content-between sm:flex-row sm:justify-between">
      <h2 className="text-lg">Technical Content Writer</h2>
      <h3 className="text-sm text-gray-300">Remote</h3>
    </div>
      <h3 className="text-sm text-gray-300 lg:hidden">Dec 2023 - May 2024 • 6 Months</h3>
    
    </div>

    {/* Company*/}
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h3 className="text-sm text-gray-300">Cloudastra Technologies <br /> Noida, Uttar Pradesh, India </h3>
      <h3 className="text-sm text-gray-300 hidden lg:block">
        Dec 2023 - May 2024 • 6 Months
      </h3>
    </div>
  </div>
      </div>
      
      {/* Education */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl   
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Education</h1>

      <div className="w-full min-h-[50px] space-y-1">

      {/* college */}

    <div className='flex flex-col'>
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h2 className="text-lg">B.Tech. , Computer Science & Engg.</h2>
      <h3 className="text-sm text-gray-300 hidden lg:block">July 2023 - Present</h3>
    </div>
      <h3 className="text-sm text-gray-300 lg:hidden">July 2023 - Present <span> • Current CGPA : 9.3</span> </h3>
    
    </div>

    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h3 className="text-sm text-gray-300">JECRC University<br /> Jaipur, Rajasthan, India</h3>
      <h3 className="text-sm text-gray-300 hidden lg:block">
        Current CGPA : 9.1
      </h3>
    </div>
  </div>
      
      {/* school */}
      <div className='flex flex-col mt-5'>
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h2 className="text-lg">Senior Secondary Education</h2>
      <h3 className="text-sm text-gray-300 hidden lg:block">May 2022</h3>
    </div>
      <h3 className="text-sm text-gray-300 lg:hidden">May 2022<span> • X : 92% | XII : 95.6% </span> </h3>
    
    </div>  

    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h3 className="text-sm text-gray-300">GR Global Academy<br /> Jaipur, Rajasthan, India</h3>
      <h3 className="text-sm text-gray-300 hidden lg:block">
        X : 92% | XII : 95.6%
      </h3>
    </div>
  </div>


      {/* Achievements */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl 
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Achievements</h1>
        <div className='text-sm'>
          <ul className='list-disc pl-5'>
            <li>Global Nominee at NASA Space Apps Challenge 2024</li>
            <li>Author of my unpublished book : <a  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13VMtegE0_b3yCNFavodmQTqT3bdRBF7r/view?usp=sharing" className='italic hover:text-blue-400' >14th Moon</a></li>
          </ul>
        </div>
      </div>


      {/* Co-Curricular Activities */}

      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl 
        lg:mb-8 md:mb-6 sm:mb-4 mb-3 mb-5 font-semibold'>Co-Curricular Activities</h1>


      {/* IAESTE */}
      <div className="w-full min-h-[50px] space-y-1">
        {/* Role */}
        <div className='flex flex-col'>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h2 className="text-lg">Local Commitee Team Member</h2>
            <h3 className="text-sm text-gray-300 hidden lg:block">Dec 2023 - Sep 2024 • 10 Months</h3>
          </div>
        <h3 className="text-sm text-gray-300 lg:hidden">Dec 2023 - Sep 2024 • 10 Months</h3>
      </div>

    {/* univ*/}
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h3 className="text-sm text-gray-300">IAESTE India LC JECRC <br/> 
          <span className='hidden lg:block'>JECRC University</span>
      </h3>
      <h3 className="text-sm text-gray-300 ">
        Corporate Relations & Marketing Department
      </h3>
    </div>
  </div>
      </div>


      
    </div>
  )
}

export default Resume
