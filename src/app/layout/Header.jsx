'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [color, setColor] = useState('home');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollY, setScrollY] = useState('');
    const [size, setSize] = useState(0);
    const [move, setMove] = useState(0);
    const [left, setLeft] = useState(0);

    const linkCls = `h-full flex items-center justify-center relative before:absolute before:content-[""] before:h-0.5 hover:before:w-full before:transition-all before:duration-300 before:left-0 before:-bottom-0.5 before:bg-gradient-to-r before:from-red-500 via-rose-500 to-red-800`;

    const getDiv = (e) => {
        e.preventDefault();
        setLeft(e.target.offsetLeft + ((e.target.clientWidth / 2) - 10));
        for (let i = 0; i < 10; i++) {
            const love = document.createElement('span');
            e.target.appendChild(love);

            let size = (Math.random() * 15 + 10).toFixed();

            love.setAttribute('class', `love absolute size-4 bg-red-500 before:absolute before:content-[''] before:w-4 before:h-4 before:bg-red-500 before:rounded-full before:-top-2 before:left-0 after:absolute after:content-[''] after:w-4 after:h-4 after:bg-red-500 after:rounded-full after:top-0 after:left-2`);

            let moveX = (Math.random() - 0.5) * 100;
            let moveY = (Math.random() - 0.5) * 100;
            let duration = Math.random() * 2 + 1;

            love.style.rotate = '-45deg'
            love.style.animation = `ballMove ${duration}s ease`;
            love.style.setProperty("--x", moveX + "px");
            love.style.setProperty("--y", moveY + "px");
            setTimeout(() => {
                love.remove();
            }, 1800);
        }
    }

    return (
        <div className={`w-full h-24 flex flex-col items-center justify-between px-10 transition-all duration-300 backdrop-blur-md border-b-2 border-b-gray-300 z-20 ${scrollY ? 'fixed top-0' : 'absolute'}`}>
            <nav className='w-full h-full flex items-center justify-between'>
                <Link href="">Logo</Link>
                <ul className='h-full text-lg font-semibold flex items-center justify-center space-x-5 relative'>

                    <div className={`absolute transition-all duration-300 ${left != 0 ? 'flex' : 'hidden'}  w-3 h-3 top-2 bg-red-500 -rotate-45 before:absolute before:content-[''] before:w-3 before:h-3 before:bg-red-500 before:rounded-full before:-top-1.5 before:left-0 after:absolute after:content-[''] after:w-3 after:h-3 after:bg-red-500 after:rounded-full after:top-0 after:left-1.5`} style={{ left: `${left}px`}}>
                    </div>

                    <li className='h-full flex items-center justify-center'>
                        <Link href="" className={`${linkCls} ${color == 'home' ? 'text-red-500 before:w-full' : 'text-black before:w-0'}`} onClick={(e) => {
                            getDiv(e);
                            setColor('home');
                        }
                        }>Home</Link>
                    </li>
                    <li className='h-full flex items-center justify-center'>
                        <Link href="" className={`${linkCls} ${color == 'photos' ? 'text-red-500 before:w-full' : 'text-black before:w-0'}`} onClick={(e) => {
                            getDiv(e);
                            setColor('photos');
                        }
                        }>Photos</Link>
                    </li>
                    <li className='h-full flex items-center justify-center'>
                        <Link href="" className={`${linkCls} ${color == 'chats' ? 'text-red-500 before:w-full' : 'text-black before:w-0'}`} onClick={(e) => {
                            getDiv(e);
                            setColor('chats');
                        }
                        }>Chats</Link>
                    </li>
                    <li className='h-full flex items-center justify-center'>
                        <Link href="" className={`${linkCls} ${color == 'about' ? 'text-red-500 before:w-full' : 'text-black before:w-0'}`} onClick={(e) => {
                            getDiv(e);
                            setColor('about');
                        }
                        }>About</Link>
                    </li>
                    <li className='h-full flex items-center justify-center'>
                        <Link href="" className={`${linkCls} ${color == 'contact' ? 'text-red-500 before:w-full' : 'text-black before:w-0'}`} onClick={(e) => {
                            getDiv(e);
                            setColor('contact');
                        }
                        }>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
