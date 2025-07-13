import { Outlet } from 'react-router-dom';

function ContainerBody() {
  return (
    <div className="w-full lg:p-12 md:p-7 sm:p-6 p-6">
      <Outlet />
    </div>
  )
}

export default ContainerBody
