import React from 'react';

function ResMenu({showmenu}) {
  return (
    <>
    <div className={`${showmenu ? 'top-20 opacity-100' : 'top[-100%] opacity-0'} h-auto w-full bg-white/40 backdrop-blur-md fixed top-0 z-40`}>
        <nav className='my-10 text-2xl font-semibold text-center'>
            <ul className='space-y-10'>
                <li>
                    <a href="#">GET STARTED</a>
                </li>
                <li>
                    <a href="#">LEARN MORE</a>
                </li>
                <li>
                    <a href="#">CONTACT US</a>
                </li>
            </ul>
        </nav>
    </div>
    </>
  );
}

export default ResMenu;