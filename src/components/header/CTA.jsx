import React from 'react'
import Resume from "../../assets/GlauberMarquesResumeFullStack.pdf" 

function CTA() {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default CTA