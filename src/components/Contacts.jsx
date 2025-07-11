import React from 'react'

function Contacts() {

  const socials_link = [
    {name : "github", link : "https://github.com/srishtinsaan", icon : "devicon-github-original"},
    {name : "linkedin", link : "https://www.linkedin.com/in/srishti-singh-001842278", icon : "devicon-linkedin-plain"},
    {name : "twitter", link : "https://x.com/srishtinsaan", icon : "devicon-twitter-plain"}
  
  ]
  return (
    <div className='my-10 mx-12'>
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl'>Socials</h1>
        <br />
        <div className='flex gap-7'>
        {socials_link.map((items, index) => (
            <div className="shadow-[0_10px_20px_rgba(255,255,255,0.4)] overflow-hidden">
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                    <i className={items.icon + " w-full h-full flex items-center justify-center text-2xl"}></i>
              </a>
            </div>
        ))}
        </div>
        
      </div>
      <hr />
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl'>Email</h1>
        <br />
        <h3>srish17816@gmail.com</h3>
      </div>
      <hr />
    </div>
  )
}

export default Contacts
