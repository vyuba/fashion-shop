// import {useState} from 'react'
import { MenuIcon, X } from "lucide-react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import data from '../public/data.js'
import { useState } from 'react';

function Portfolio() {
    const [filter, setFilter] = useState('all');

    const filteredData = data.filter(item => {
        if (filter === 'all') return true;
        return item.projectType === filter;
    });
    gsap.registerPlugin(useGSAP)
    useGSAP(
        ()=>{
            const menuIcon = document.querySelector('.menu-icon')
            const closeIcon = document.querySelector('.closeIcon')
            const tl = gsap.timeline({ paused: true })
            gsap.set('.menu', {
                clipPath: 'circle(0% at top right)',
                display: 'none'        // No easing for instant display
              });    
                      // Overlap slightly with previous animation
              gsap.to(".box", {
                duration: 5,
                ease: "none",
                x: "-=500", //move each box 500px to right
                modifiers: {
                  x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
                },
                repeat: -1
              });

            tl.to('.menu', {
                clipPath: 'circle(150% at top right)',
                display: 'block',
                duration: 0.5,
                ease: 'power2.inOut'
            });

            function toggleMenu() {
                tl.reversed() ? tl.play() : tl.reverse();
              }
            
              menuIcon.addEventListener('click', toggleMenu);
              closeIcon.addEventListener('click', toggleMenu);
        }
    )
  return (
<div className='body-conatainer bg-stone-950 px-5 py-3'>
    <div className=" fixed w-full z-[50] left-0 top-3 px-5">
        <ul className="w-full flex flex-row gap-3 bg-stone-950 py-2 px-3 rounded-lg border border-solid overflow-hidden uppercase">
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
            <p className="box whitespace-nowrap">hire me</p>
        </ul>
    </div>
    <div className="portfolio-nav z-[100] fixed top-[4.1rem] right-5">
        <ul className="menu bg-stone-950 border-[3px] border-stone-800 border-solid py-7 rounded-xl grid gap-2 uppercase text-lg relative">
        <div className="closeIcon  py-2 px-2 rounded-xl hover:bg-stone-800 absolute top-1 right-2"><X/></div>
            <li className="py-1 px-2 hover:bg-stone-900 pl-5 pr-14 mx-2 rounded-md">home</li>
            <li className="py-1 px-2 hover:bg-stone-900 pl-5 pr-14 mx-2 rounded-md">about me</li>
            <li className="py-1 px-2 hover:bg-stone-900 pl-5 pr-14 mx-2 rounded-md">works</li>
            <li className="py-1 px-2 hover:bg-stone-900 pl-5 pr-14 mx-2 rounded-md">contact me</li>
        </ul>
    </div>
    <div className=" py-2 px-2 border-solid border-[3px] bg-black  z-50 border-stone-800 fixed rounded-xl top-[4rem] right-5 menu-icon cursor-pointer"><MenuIcon/></div>
    <div className="grid-container">
        <div className="header">Header</div>
        <div className="sidebar overflow-y-auto px-3">
        <h1 className="capitalize font-bold text-xl sticky top-0 bg-black py-3 w-full">about me</h1>
            <p>
            Navigating the realms of product design and web development, every meticulous stride signifies progress – Baby steps paving the path to digital brilliance.
            </p>
            <div className="pt-4">
            <h6 className="text-lg capitalize">skills:</h6>
            <p className="capitalize"> 
             html, css, JavaScript, bootstrap, tailwind css,react framework,shopify, liquid, shopify hydrogen, gsap animation, figma, adobe xd, usability studies, lo-fi prototype, hi-fi prototype, user research, wireframing.
            </p>
            </div>
        </div>
        <div className="main-content overflow-y-auto ">
        <div className="w-full overflow-hidden sticky bg-black top-0 py-3 px-3">
            <div className="flex gap-4 w-full overflow-x-auto scroll-smooth">
                <button 
                    onClick={() => setFilter('all')}
                    className={`capitalize py-[7px] px-4 border-stone-800 border-solid border-[3px] rounded-xl whitespace-nowrap ${filter === 'all' ? 'bg-stone-900' : ''}`}>
                    all works
                </button>
                <button 
                    onClick={() => setFilter('personal')}
                    className={`capitalize py-[7px] px-4 border-stone-800 border-solid border-[3px] rounded-xl whitespace-nowrap ${filter === 'personal' ? 'bg-stone-900' : ''}`}>
                    personal project
                </button>
                <button 
                    onClick={() => setFilter('client')}
                    className={`capitalize py-[7px] px-4 border-stone-800 border-solid border-[3px] rounded-xl whitespace-nowrap ${filter === 'client' ? 'bg-stone-900' : ''}`}>
                    client work
                </button>
            </div>
        </div>
            <div className="px-3 py-3 h-full overflow-x-auto flex flex-col gap-3">
            {
                    filteredData.map((item) => (
                        <div key={item.id} className="border-solid border-[2px] border-stone-800 w-full h-[300px] rounded-lg flex flex-col overflow-hidden">  
                            <div style={{backgroundImage: `url(${item.images})`}} className="bg-white flex-1 bg-cover bg-center">
                            </div>
                            <div className="bg-black h-20 px-2 py-3">
                                <h1 className="capitalize text-lg">{item.name}</h1>
                                <p className="capitalize">{item.details} - {item.stack}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="footer overflow-y-auto px-3 ">
        <h1 className="capitalize font-bold text-xl sticky top-0 bg-black py-3 w-full">contact me</h1>
        <form action="">
         <div className="mb-5">
           <label htmlFor="name" name="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>

         <div className="mb-5">
           <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600 capitalize">message</label>
           <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
           {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
         </div>

         <button className="block w-full bg-stone-900 text-white font-bold p-3 rounded-lg uppercase">Submit</button>
       </form>
        <div className="py-4 w-full capitalize">
            <h6 className="text-lg capitalize">links:</h6>
            <ul className="flex flex-row items-center gap-5">
                <a className="underline" href=""><li>github</li></a>
                <a className="underline" href="https://x.com/st33z_z"><li>twitter</li></a>
                <a className="underline" href="https://www.instagram.com/vyuba_/"><li>instagram</li></a>
                <a className="underline" href="https://www.behance.net/alexanderpreye"><li>behance</li></a>
            </ul>
            </div>
        </div>
    </div>
    <div className="w-full text-center py-5">
        alexander preye
    </div>
</div>
  )
}

export default Portfolio