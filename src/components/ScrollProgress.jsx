import  { useEffect, useState } from 'react'


export default function ScrollProgress() {
    const [calculatedHeight, setCalculatedHeight]=useState(0)

    useEffect(()=>{
        const updateScrollReading=()=>{
            const scrollCurrentProgress= window.scrollY;
            const scrollHeight= document.body.scrollHeight-window.innerHeight;
            if(scrollHeight){
                setCalculatedHeight(((scrollCurrentProgress / scrollHeight) * 100).toFixed(2));
            }
        }
        window.addEventListener('scroll',updateScrollReading)
        return ()=>{
            window.removeEventListener('scroll',updateScrollReading)
        }
    },[]);
  return calculatedHeight
}