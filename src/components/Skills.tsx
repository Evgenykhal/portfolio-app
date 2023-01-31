import React from 'react';
import SkillElement from './SkillElement';
import { SkillElements } from '@/db/SkillElements';




const Skills = () => {

  return (
    
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
            <p className='text-xl tracking-widest uppercase font-bold'>экспертиза</p>
            {/* <h2 className='py-4'>What I Can Do</h2> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {SkillElements.map(elem => {
                return (
                  <SkillElement image={elem.image} text={elem.text} key={elem.id}/>  
                )
              })
                
              }

            </div>
        </div>
    </div>
  );
};

export default Skills;