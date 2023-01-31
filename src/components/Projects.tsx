import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectElements } from '@/db/ProjectElements';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center'>
            <p className='text-xl tracking-widest uppercase font-bold'>Проекты</p>
           {/*  <h2 className='py-4'>What I&apos;ve built</h2> */}
            <div className='grid md:grid-cols-2 gap-8'>
            
            {
                ProjectElements.map(elem => {
                    return (
                        <ProjectItem text={elem.text} image={elem.image} key={elem.id} framework={elem.framework} addres={elem.addres}/>
                    )
                    })
            }
            
            </div>
        </div>
    </div>
  )
}

export default Projects