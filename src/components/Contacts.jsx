import {useState} from 'react'

function Contacts() {

  const socials_link = [
    {name : "github", link : "https://github.com/srishtinsaan", icon : "devicon-github-original"},
    {name : "linkedin", link : "https://www.linkedin.com/in/srishti-singh-001842278", icon : "devicon-linkedin-plain"},
    {name : "twitter", link : "https://x.com/srishtinsaan", icon : "devicon-twitter-plain"}
  ]
    
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, open default mail client
    window.location.href = `mailto:srish17816@gmail.com?subject=${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`
    
    // Reset form
    setFormData({name: '', email: '', message: ''})
  }

  
  return (
    
    <div className=''>

      {/* socials */}
      <div className='w-full min-h-[8px] mb-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl  font-semibold'>Socials</h1>
        <br />
        <div className='flex gap-7 '>
        {socials_link.map((items, index) => (
            <div key={index} className="shadow-[0_10px_20px_rgba(255,255,255,0.4)] w-5 h-5 rounded-4xl">
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                    <i className={items.icon + " w-full h-full flex items-center justify-center text-2xl"}></i>
              </a>
            </div>
        ))}
        </div>
        
      </div>
      <hr />

      {/* email */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl  font-semibold'>Email</h1>
        <br />
        <h3>srishtisingh.dev@gmail.com</h3>
      </div>
      <hr />
    



        {/* Contact Form */}
      <div className='w-full min-h-[100px] my-10'>
        <h1 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-5'>Send me a message</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-md'>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className='border p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] backdrop-blur-md border border-white/20 text-white overflow-hidden group'
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className='border p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] backdrop-blur-md border border-white/20 text-white overflow-hidden group'
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className='border p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] backdrop-blur-md border border-white/20 text-white overflow-hidden group'
            rows="5"
            required
          />
          <button 
          type='submit'
          className="relative p-1 text-sm px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden group hover:bg-white/20 transition">
            Send Message
          </button>
        </form>
        </div>

    </div>
  )
}

export default Contacts
