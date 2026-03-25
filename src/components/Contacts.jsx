import { useState } from 'react'
import emailjs from 'emailjs-com'

function Contacts() {

  const socials_link = [
    { name: "github", link: "https://github.com/srishtinsaan", icon: "devicon-github-original" },
    { name: "linkedin", link: "https://www.linkedin.com/in/srishti-singh-001842278", icon: "devicon-linkedin-plain" },
    { name: "twitter", link: "https://x.com/srishtinsaan", icon: "devicon-twitter-plain" }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false) // ✅ FIXED

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      alert("Message sent successfully ✅")
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      setLoading(false)
      console.error(error)
      alert("Failed to send ❌")
    })
  }

  return (
    <div>

      {/* socials */}
      <div className='w-full mb-10'>
        <h1 className='text-xl sm:text-2xl font-semibold'>Socials</h1>
        <br />
        <div className='flex gap-7'>
          {socials_link.map((items, index) => (
            <div key={index} className="shadow-[0_10px_20px_rgba(255,255,255,0.4)] w-8 h-8 rounded-full flex items-center justify-center">
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                <i className={`${items.icon} text-2xl`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* email */}
      <div className='w-full my-10'>
        <h1 className='text-xl sm:text-2xl font-semibold'>Email</h1>
        <br />
        <h3>srishtisingh.dev@gmail.com</h3>
      </div>

      <hr />

      {/* Contact Form */}
      <div className='w-full my-10'>
        <h1 className='text-xl sm:text-2xl font-semibold mb-5'>Send me a message</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-md'>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className='p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white'
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className='p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white'
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className='p-2 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white'
            required
          />

          <button
            type='submit'
            disabled={loading}
            className="p-2 text-sm px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contacts