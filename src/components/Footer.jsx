import { useState, useEffect } from 'react';

function Footer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // updates every 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const today_date = now.toLocaleDateString("en-US", {month : 'long', day: '2-digit', year: 'numeric', })
  const time = now.toLocaleTimeString("en-US", {hour : 'numeric', minute: '2-digit', second: '2-digit', hour12 : true})
  return (
    <div>
      <div className='text-gray-500 mb-50'>
         Jaipur, IND • {today_date} {time}
      </div>
    </div>
  )
}

export default Footer
