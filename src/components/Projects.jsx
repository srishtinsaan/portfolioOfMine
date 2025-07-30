import React from 'react'

function Projects() {
  
  return (
    <div className='flex justify-center gap-15 place-content-around flex-wrap  mb-15 '>
      <div className='w-70 relative lg:min-h-[200px]  shadow-[0_30px_22px_-11px_rgba(255,255,255,0.2)]'>
        
        {/* image */}
        <div className='w-full h-40 overflow-hidden'>
          <img src="" className='w-full h-full object-cover' alt="" />
        </div>

        {/* heading */}
        <div className='w-full border-white h-10 bg-white/10 flex items-center '>
          <h1 className='ml-4 text-xl sm:text-2xl lg:text-xl '>Blog Application</h1>
        </div>

        {/* desc */}
        <div className='w-full min-h-[120px] m-4'>
          <p className=' text-sm mt-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi voluptatum similique dolor repellat ea?</p>
        </div>

        {/* button */}
        <div className='m-0 absolute flex bottom-4 right-4 left-4 justify-between'>

          <button className='p-1 text-sm rounded-md px-3  shadow-[0px_0px_7px_rgba(255,255,255,0.5)]'>Github</button>
          <button className='p-1 text-sm rounded-md px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] '>Live</button>

          
        </div>
      </div>





      {/* <div className='w-70 min-h-[200px] border border-white shadow-[0_30px_22px_-11px_rgba(255,255,255,0.2)]'>
        <div className='w-full h-40 border-b-1 border-white overflow-hidden'>
          <img src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-full border-b-1 border-white h-10 flex items-center '>
          <h1 className='ml-4 text-xl'>A tribute to KC</h1>
        </div>
        <div className='w-full h-40'>
          <p className='ml-4 text-sm mt-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi voluptatum similique dolor repellat ea?</p>
        </div>
      </div> */}
     </div>
  )
}

export default Projects
