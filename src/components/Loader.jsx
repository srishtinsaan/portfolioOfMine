import React, { useState, useEffect } from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function LotteryWelcome() {
  const target = 'WELCOME'.split('')
  const [display, setDisplay] = useState(Array(target.length).fill(''))

  useEffect(() => {
    const intervalTime    = 50    // har 50ms ek random letter
    const scrambleDuration = 1000 // sab scramble karte rahenge 1s tak
    const lockDelay        = 200  // phir har letter 200ms gap se lock

    target.forEach((char, idx) => {
      let elapsed = 0  // A per-letter counter (in milliseconds) to track how long this particular letter has been scrambling.
      const stopTime = scrambleDuration + idx * lockDelay

      const iv = setInterval(() => {
        elapsed += intervalTime

        if (elapsed < stopTime) {
          // abhi scramble
          setDisplay(disp => {
            const newDisp = [...disp]
            newDisp[idx] = letters.charAt(
              Math.floor(Math.random() * letters.length)
            )
            return newDisp
          })
        } else {
          // time ho gaya, lock real character
          clearInterval(iv)
          setDisplay(disp => {
            const newDisp = [...disp]
            newDisp[idx] = char
            return newDisp
          })
        }
      }, intervalTime)
    })
  }, [])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <h1 className="text-white  font-mono">
        {display.map((c, i) => (
          <span key={i} className="inline-block mx-1"
            style={{
              transition: 'color 0.3s ease', width: '1ch', textAlign: 'center',
            }}
          >
            {c || '_'}
          </span>
        ))}
      </h1>
    </div>
  )
}
