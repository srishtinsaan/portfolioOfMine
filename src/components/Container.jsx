
import Profile from './Profile'
import Menu from './Menu'
import ContainerBody from './ContainerBody'

function Container() {
  
  return (
    <div>
      <div className="w-3xl border border-white min-h-[500px] text-white shadow-[0_10px_20px_rgba(255,255,255,0.4)]  mt-20">
        <Profile/>
        <Menu/>
        <ContainerBody/>
      </div>
    </div>
  )
}

export default Container
