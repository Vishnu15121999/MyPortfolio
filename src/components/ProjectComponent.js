import React from 'react'

const ProjectComponent = ({id,title,description,image}) => {
  return (
    <div key={id} className='project-card'>
      <img src={image} alt='project-image'/>
      <div className='project-details'>
        <hr style={{margin:'5px'}}/>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  )
}

export default ProjectComponent