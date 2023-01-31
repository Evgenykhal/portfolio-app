import React from 'react'
import LaptopIcon from '../../public/laptop-image.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            
            <div className='col-span-2'>
                
                <p className='uppercase text-xl tracking-widest text-gray-700 font-bold'>обо мне</p>
                
                <p className='py-2 text-gray-600'>
                    Вообще программирование - это моя специальность по диплому :). Но, так получилось, что 
                    по своей основной специальности - инженер-программист, я почти не работал. И хотя моя работа и была всегда связана с IT, 
                    но в основном это были задачи в части построения и развития бизнеса, управления проектами и сотрудниками.
                    Так что программирование - это, наверное, для меня больше хобби, которое может перерасти во что-то большее... или не перерасти :).
                    В любом случае - есть навыки, желание и досточно свободного времени, которое я могу посвятить этому занятию.
                    Как я уже говорил, в основном я специализируюсь на разработке адаптивных web-сайтов и web-приложений. По 
                    большей части - пишу front, но иногда и back по необходимости.
                    Пишу на JavaScript React Next.js. Для контроля типов использую TypeScript. Для стилей - Tailwind.
                    Могу реализовать несложный API на серверной стороне на NodeJS. Из баз данных есть опыт работы с PostgreSQL, MondoDB, Firebase.
                </p>

            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center p4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl'
                    src='/laptop-image.jpg' 
                    alt='img'
                    width={640}
                    height={423}
                />
            </div>

        </div>
    
    </div>
  );
};

export default About;