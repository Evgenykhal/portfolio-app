import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            
            <div>
                
                <p className='uppercase font-bold tracking-widest text-gray-600'>
                    добро пожаловать на мой сайт
                </p>
                
                <h1 className='py-4 text-gray-700'>
                    Меня зовут Евгений
                </h1>
                
                <h1 className='py-2 text-gray-700'>
                    я FrontEnd и немного BackEnd :) Web разработчик
                </h1>
                
                <p className='py-4 text-gray-600 max-w-[60%] m-auto text-xl'> 
                    Специализируюсь на разработке (и дизайне) адаптивных сайтов и web-приложений.
                </p>
                
                {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub size={30} color='#374151'/>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={30} color='#374151'/>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill size={30} color='#374151'/>
                    </div> 
                
                </div> */}
            
            </div>
        
        </div>
    
    </div>
  
  );

};

export default Main;