import React from 'react';
import { useSelector } from 'react-redux';
import ProjectComponent from './ProjectComponent';

const AllProjects = () => {
  const allProjects = useSelector((state) => state.allProjects.projects);
  //console.log(allProjects);

  const renderProjects = allProjects.map((project) => {
    const { id, title, description, imageURL } = project;
    return (
      <ProjectComponent id={id} title={title} description={description} image={imageURL} />
    )
  })

  // return (
  //   <div className='container'>
  //     <div style={{
  //       width: '98%', height: '300px', backgroundColor: 'white',
  //       display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px'
  //     }}>
  //       <h4 className='main-heading'>Hi, I am Vishnu , a dedicated and organized individual seeking an
  //         entry-level position in the field of Web Development.
  //         I’m proficient in HTML , CSS , JavaScript , MERN Stack
  //         and web development. Willing to contribute ideas ,
  //         learn new things and utilize the gained skills to
  //         positively contribute to the company.
  //       </h4>
  //     </div>
  //     <div className='main-container'>{renderProjects}</div>
  //   </div>
  // )

  return (
    <div className='home-container'>
      <div style={{ backgroundColor: 'white', width: '95%', height: '300px', display: 'flex', alignItems: 'center', 
      justifyContent: 'center' , borderRadius:'10px'}}>
        <h4 className='main-heading'>Hi, I am Vishnu , a dedicated and organized individual seeking an
          entry-level position in the field of Web Development.
          I’m proficient in HTML , CSS , JavaScript , MERN Stack , Redux(State Management)
          and web development. Willing to contribute ideas ,
          learn new things and utilize the gained skills to
          positively contribute to the company.
        </h4>
      </div>
      <div style={{ backgroundColor: 'skyblue', width: '90%', height: '50px', fontFamily:'cursive' ,
                    display:'flex' , alignItems:'center', justifyContent:'center' , borderRadius:'10px'}}>
        <h2>Projects</h2>
      </div>
      <div className='main-container'>
        {renderProjects}
      </div>
    </div>
  )
}

export default AllProjects;