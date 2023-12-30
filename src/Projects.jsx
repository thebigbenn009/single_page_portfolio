import React from 'react'
import { designs } from './designs'
import Wrapper from './Wrapper'

const Projects = () => {
  return (
    <Wrapper>
      <div className='projects'>
        <div className='projects-header'>
          <h3>Projects</h3>
          <h4><span>CONTACT ME</span></h4>
        </div>
        <div className='projects-content'>
          {designs.map((design) => (
              <div className='projects-images'>
                  <img src={design.image} alt='design_images'/>
                  <h3>{design.header}</h3>
                  <div className='project-frameworks'>
                      <h5>{design.framework1}</h5>
                      <h5>{design.framework2}</h5>
                      <h5>{design.framework3}</h5>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects