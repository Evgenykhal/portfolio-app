import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsWindowSidebar } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#374151');
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }
  window.addEventListener('scroll', handleShadow);

  if(
    router.asPath === '/project1' || 
    router.asPath === '/project2' ||
    router.asPath === '/project3' ||
    router.asPath === '/project4'
   ) {
     setNavBg('transparent');
     setLinkColor('#ecf0f3');
 } else {
   setNavBg('#ecf0f3');
   setLinkColor('#374151');
 }

},[router]);

  return (
    <div
      style={{backgroundColor: `${navBg}`}} 
      className= {
        shadow 
          ? 'fixed w-full h-20 shadow-xl z-10'
          : 'fixed w-full h-20 z-10'
      }>

      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        
        {/* Nav Icon */}
        <Image 
          src='/../public/coffee-icon.png' 
          alt='/'
          width={50}
          height={50}
        />
  
        {/* Menu */}
        <ul
          style={{color: `${linkColor}`}} 
          className='hidden md:flex'>
          <Link href='/#home'>
            <li className='ml-10 text-sm hover:font-bold'>ГЛАВНАЯ</li>
          </Link>
          <Link href='/#about'>
            <li className='ml-10 text-sm hover:font-bold'>ОБО МНЕ</li>
          </Link>
          <Link href='/#skills'>
           <li className='ml-10 text-sm hover:font-bold'>ЭКСПЕРТИЗА</li>
          </Link>
          <Link href='/#projects'>
           <li className='ml-10 text-sm hover:font-bold'>ПРОЕКТЫ</li>
          </Link>
          <Link href='/#contact'>
           <li className='ml-10 text-sm hover:font-bold'>КОНТАКТЫ</li>
          </Link>
        </ul>
            
        {/* Menu Icon */}
        <div 
          className='md:hidden cursor-pointer hover:scale-110 ease-in duration-300'
          onClick={handleNav}
          >
          <AiOutlineMenu size={25}/>
        </div>

      </div>

      {/* Overlay */}
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        {/* Mobile menu */}
        <div 
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          
          <div className='flex flex-col justify-between h-full'>
            
            <div> {/* upper part start -------------------------------------------------------------*/}
            
              {/* CoffeeIcon + CloseIcon */}
              <div className='flex items-center justify-between'>
                
                
                <Image src='/../public/coffee-icon.png' width={50} height={50} alt='/' />
                

                <div 
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'
                  onClick={handleNav}
                  >
                  <AiOutlineClose />
                </div>
              </div>

              {/* Some proposal text */} 
              {/* <div className='border-b boprder-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something legendary together</p>  
              </div> */}

              {/* Mobile menu content */}
              <div className='py-4 flex flex-col mt-12'>
                <ul>
                  <Link href='/#home'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:font-bold'>ГЛАВНАЯ</li>
                  </Link>
                  <Link href='/#about'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:font-bold'>ОБО МНЕ</li>
                  </Link>
                  <Link href='/#scills'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:font-bold'>ЭКСПЕРТИЗА</li>
                  </Link>
                  <Link href='/#projects'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:font-bold'>ПРОЕКТЫ</li>
                  </Link>
                  <Link href='/#contact'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:font-bold'>КОНТАКТЫ</li>
                  </Link>
                </ul>
              </div>

            </div> {/* top part end --------------------------------------------------------------*/}

            <div> {/* bottom part start --------------------------------------------------------- */}
            
              {/* Bottom Info */}
              {/* <div className='pt-10'>
                <p className='uppercase tracking-widest'>
                  Let&apos;s connect
                </p>

                {/* Connect icons 
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>

              </div> */}

            </div> {/* bottom part end ------------------------------------------------------------------------*/}

          </div>

        </div>

      </div>
      
    </div>

    
  );
};

export default Navbar;