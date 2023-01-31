import Image from 'next/image';
import React from 'react';

import { ISkillElement } from '@/interfaces/ISkillElement';

const SkillElement = ({image, text, key}:ISkillElement) => {
  return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-8 justify-center items-center'>
                    <div className='mx-3 flex itmes-center' key={key}>
                        <Image 
                            src={image} 
                            alt='/'
                            width={64} 
                            height={64}
                            />
                    </div>
                    <div className='mx-3 flex items-center'>
                        <h3>{text}</h3>
                    </div>
                </div>
        </div>
  );
};

export default SkillElement;