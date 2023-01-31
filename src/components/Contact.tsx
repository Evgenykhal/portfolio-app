import Image from 'next/image';
import React from 'react';
import ContactImage from '../../public/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[600px] m-auto px-2 py-16 flex flex-col items-center'>
            <p className='text-xl tracking-widest uppercase font-bold'>
                Контакты
            </p>
            {/* <h2 className='py-4'>
                Будем на сввязи
            </h2> */}
            <div className='flex items-center justify-center'>
               
                {/* left */}
                <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                   
                    <div className='lg:p-4 h-full'>
                        
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImage} alt='/'/>
                        </div>
                                        
                        <div className='flex flex-col justify-center items-center'>
                            {/* <h2 className='py-2'>
                                Евгений
                            </h2>
                            <p>
                                Front-End разработчик
                            </p> */}
                           {/*  <p className='py-4'>
                                I am available for freelance or full-time position. Contact me and let&apos;s talk.
                            </p> */}
                        </div>

                        <div className='pt-8 flex flex-col items-center'>
                            
                          {/*   <p>
                                Connect With Me
                            </p> */}
                            
                            {/* Icons */}
                            <div className='flex flex-col items-start justify-center w-full max-w-[330px]'>
                                
                                <div className='flex items-center'>
                                    <div className='mx-2'>
                                        <AiOutlineMail size={30}/>
                                    </div>
                                    <p>
                                        evgeny.khalikov@gmail.com
                                    </p>
                                </div>

                                <div className='flex items-center'>
                                    <div className='mx-2'>
                                        <FaGithub size={30}/>
                                    </div>
                                    <Link className='hover:font-bold' href='https://github.com/Evgenykhal'>
                                    https://github.com/Evgenykhal
                                    </Link>
                                </div>
                               {/*  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <BsFillPersonLinesFill size={30}/>
                                </div> */}

                            </div>

                        </div>

                    </div>

                </div> {/* End left */}

{/*                 {/* right 

                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>

                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='email' 
                                    />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                    />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                            </div>

                            <button className='w-full p-4 text=gray-100 mt-4'>Send message</button>

                        </form>
                    </div>

                </div> */}

            </div>
        
            <div className='flex justify-center py-12'>
                <Link href='/#home'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30}/>
                </div>
                </Link>
            </div>

        </div>
    </div>
  );
};

export default Contact;