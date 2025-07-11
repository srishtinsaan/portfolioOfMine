import myImage from '../assets/images/Srishti.png'
import LeetcodeHeatmap from './LeetcodeHeatmap';

function Profile() {


  return (
    <div className="relative">

        {/* bg image */}
        {/* https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1591302418462-eb55463b49d6?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        {/* https://images.unsplash.com/photo-1578902676466-5b361386e858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
      <div className="w-full h-[200px] border-b border-white overflow-hidden relative flex items-center justify-center">
        <LeetcodeHeatmap username="srishtinsaan"/>
      </div>


      {/*profile image */}
        <div className="w-34 h-34 rounded-full absolute border-1 border-white mx-15 -my-16 overflow-hidden shadow-[0_7px_10px_rgba(255,255,255,0.4)] ">
            <img className="w-full bg-black h-full object-cover object-top scale-110 translate-y-2" src={myImage} draggable="false"/>
        </div>

        {/* heading */}
      <div className='w-full h-25 border-b-1 border-white mt-22 pl-15'>
        <h1 className="text-4xl mb-2 font-semibold">Namaste! I'm Srishti Singh.</h1>
          <h2 className='text-sm mr-2'>aka srishtinsaan</h2>
          
      </div>
    </div>
  )
}

export default Profile
