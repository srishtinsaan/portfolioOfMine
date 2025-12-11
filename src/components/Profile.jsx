import myImage1 from '../assets/images/Srish.jpg'




function Profile() {
  

  return (
    <div className="relative w-full">

        {/* bg image */}
                {/* <img src="https://cdn.pfps.gg/banners/4171-black-and-white-aesthetic.png" className='w-full h-full object-cover' alt="" /> */}

        {/* https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1591302418462-eb55463b49d6?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1578902676466-5b361386e858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
      <div className="p-4 w-full h-[120px] sm: h-[160px] lg:h-[160px] overflow-hidden relative flex flex-col items-center justify-center ">
        <h1 className='m-0 mb-0 text-sm sm:text-xl lg:text-xl lg:m-0 sm:m-0 text-center'>"Every big problem is just a bunch of small ones remembered well."</h1>
        <h3 className='text-[10px] sm:text-sm lg:text-sm ' >- Dynamic Programming</h3>
        

        
      </div>
      {/* border-b-[0.5px] lg:border-b-1  */}


      {/*profile image */}
        <div className="w-26 h-26 
        sm:w-32 sm:h-32 
        md:w-32 md:h-32 
        lg:w-34 lg:h-34 
        rounded-full 
        mx-4 -my-12 
        sm:mx-6 sm:mb-5 
        md:mx-6  md:-my-16 
        lg:mx-10 overflow-hidden shadow-[0_5px_10px_rgba(255,255,255,0.4)] ">
            <img className="w-full bg-black object-cover object-top scale-110 translate-y-1  translate-x-1" src={myImage1} draggable="false"/>
           
        </div>

        {/* heading */}
      <div className='w-full 
      mt-16 
      md:mt-20 
      sm:mt-5 
      lg:mt-22 pl-4'>
        {/* border-b-[0.5px] */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  
        lg:mb-8 md:mb-6 sm:mb-4 mb-3
        lg:ml-7 md:ml-3 sm:ml-2  ml-2 
        font-semibold  ">Hi! I'm Srishti Singh.</h1>    
              
      </div>
    </div>
  )
}

export default Profile
