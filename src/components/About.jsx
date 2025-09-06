import { motion } from "motion/react"

function About() {
  const marqueeData = [
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", image: "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vite.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"},
    { name: "Framer", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
    { name: "Appwrite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" },
    {name: "NPM", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg"},
    { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  ]

  
  return (
    <div className="w-full h-full relative">

      <div>
        I'm a Computer Science undergrad and a developer who genuinely enjoys building things and love to solve real problems. 
         <br /><br />
          I’ve participated in three hackathons, and was honored to be selected as a Global Nominee in one. These experiences shaped my mindset to build fast, iterate smart, and collaborate effectively under pressure.        <br /><br />
        
        I’ve worked with several tools and technologies (listed below) and am always open to learning more. 
        <br /><br />
      </div>


      {/* Marquee Strips*/}
      {/* Top Marquee */}
<div className="overflow-hidden whitespace-nowrap w-full mb-6 flex MarqueeGradient">
  <div className="marquee-left">
    {marqueeData.map((items, index) => (
            <div key={index} className="inline-flex rounded-md p-2 items-center gap-2 mr-3">
              <div className="w-6 h-6 rounded-md">
                <img src={items.image} alt="" />
              </div>
              <h4>{items.name}</h4>
            </div>
          ))} {/* Original */}
    {marqueeData.map((items, index) => (
            <div key={index} className="inline-flex rounded-md p-2 items-center gap-2 mr-3">
              <div className="w-6 h-6 rounded-md">
                <img src={items.image} alt="" />
              </div>
              <h4>{items.name}</h4>
            </div>
          ))} {/* Duplicate */}
  </div>
</div>

{/* Bottom Marquee */}
<div className="overflow-hidden whitespace-nowrap w-full mb-6 flex MarqueeGradient">
  <div className="marquee-right">
    {marqueeData.map((items, index) => (
            <div key={index} className="inline-flex rounded-md p-2 items-center gap-2 mr-3">
              <div className="w-6 h-6 rounded-md">
                <img src={items.image} alt="" />
              </div>
              <h4>{items.name}</h4>
            </div>
          ))} {/* Original reversed */}
    {marqueeData.map((items, index) => (
            <div key={index} className="inline-flex rounded-md p-2 items-center gap-2 mr-3">
              <div className="w-6 h-6 rounded-md">
                <img src={items.image} alt="" />
              </div>
              <h4>{items.name}</h4>
            </div>
          ))} {/* Duplicate reversed */}
  </div>
</div>


      
      <div>
        <p>
          Alongside development, I'm actively practicing Data Structures and Algorithms, having solved 250+ problems across platforms like LeetCode and GFG. It helps me think sharper and write more efficient code.
        <a className="ml-2 hover:text-blue-400 text-blue-300" href="https://codolio.com/profile/srishtinsaan" target="_blank" rel="noopener noreferrer">Checkout here.</a>
        <br /><br />
        I bring solid dedication, clean code, and deep focus to the table.
        <br /><br />
         I'm open to freelance work, internships, or collaborations — especially on projects that challenge me to learn and grow.
        <br/><br/>
        I’m always ready to build something impactful.
        <br/><br/>
        <a href="mailto:srish17816@gmail.com" className="hover:text-blue-500 text-blue-300" target="_blank" rel="noopener noreferrer">Contact me.</a> 
        </p>

      </div>


    </div>
  )
}

export default About

// { top: '0px', right: '0px', delay: '0s', duration: '1s' },
//       { top: '0px', right: '80px', delay: '0.2s', duration: '3s' },
//       { top: '80px', right: '0px', delay: '0.4s', duration: '2s' },
//       { top: '0px', right: '180px', delay: '0.6s', duration: '1.5s' },
//       { top: '0px', right: '400px', delay: '0.8s', duration: '2.5s' },
//       { top: '0px', right: '600px', delay: '1s', duration: '3s' },
//       { top: '300px', right: '0px', delay: '1.2s', duration: '1.75s' },
//       { top: '0px', right: '700px', delay: '1.4s', duration: '1.25s' },
//       { top: '0px', right: '1000px', delay: '0.75s', duration: '2.25s' },
//       { top: '0px', right: '450px', delay: '2.75s', duration: '2.75s' },
