
import React, { useState } from 'react'

export default function Readmore({text}) {
    const [showFullText, setShowFullText] = useState(false)

    function handleClick(){
        setShowFullText(true)
    }
    if (text.length <= 20 || showFullText){
        return <p>{text}</p>
    }
  return (
    <div>
        <p>{text.slice(0,100)}...</p>
        <button onClick={handleClick} className='text-[#293e81] font-semibold'>Read more</button>
    </div>
  )
}
