import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Project from '../Project/Project'
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
const Carosule = () => {
  const data = [
    {
        project_type: "Machine Learning",
        project_name: "House Price Prediction",
        project_des: "this is a machine learning project of prediting the value for house.",
        project_img: '',
        tech_stack: ["Python", "Machine Learning", ],
        github:"",
        web:""
    },
    {
        project_type: "Machine Learning",
        project_name: "House Price Prediction",
        project_des: "this is a machine learning project of prediting the value for house.",
        project_img: '',
        tech_stack: ["Python", "Machine Learning", "Data Visualization"],
        github:"",
        web:""
    },
    {
        project_type: "Machine Learning",
        project_name: "House Price Prediction",
        project_des: "this is a machine learning project of prediting the value for house.",
        project_img: '',
        tech_stack: ["Python", "Machine Learning", "Data Visualization", 'anjali'],
        github:"",
        web:""
    },

  ]

  
  return (
    <Carousel showThumbs={false}
    renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div className='relative bottom-[10%] left-[80%]'
            onClick={clickHandler}
          >
            <AiFillLeftCircle className='h-8 w-8 text-gray-500 cursor-pointer' />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div className='relative left-[80%]'
            onClick={clickHandler}
          >
            <AiFillRightCircle  className='h-8 w-8 text-gray-500 cursor-pointer'/>
          </div>
        );
      }}
    
    autoPlay>
    {data.map((d,i)=> <Project project_type={d.project_type} project_name={d.project_name} project_des={d.project_des} project_img={d.project_img}
    github={d.github} web={d.web}
    tech_stack={d.tech_stack}
    />)}
</Carousel>
  )
}

export default Carosule