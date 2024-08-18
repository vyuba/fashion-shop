// import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import coldCulture from '/public/new-logo-offset2.png'
// import { useRef } from 'react'
import ScrollTriger from 'gsap/ScrollTrigger'
function Navbar({handleCartOpen}) {
  gsap.registerPlugin(ScrollTriger, useGSAP)
  const tl = gsap.timeline({ paused: true });
  // const NavberContainer = useRef(null);
  useGSAP(
    ()=>{
      tl.to('.navLinks',
        {
          color: 'black',
          textDecoration:'underline',
          scrollTrigger:{
            trigger: '.product-grid',
            start: 'top 50%',
            end:'bottom bottom',
            scrub: 1,
          }
        }
      )
      .to('.logo', {
        filter: 'brightness(0) invert(1)',
        scrollTrigger: {
          trigger: '.product-grid',
          start: 'top 50%',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
    })
  return (
    <div className="w-full z-50 fixed px-4 py-3 NavbarContainer" >
        <ul className="w-full flex justify-between items-center capitalize ">
            <li className='uppercase text-sm font-semibold navLinks'>collection</li>
            <li className="text-xl w-32 flex items-center justify-center font-semibold uppercase">
                <img className='logo' src={coldCulture} alt="" />
            </li>
            <li className='uppercase text-sm font-semibold navLinks cursor-pointer' onClick={handleCartOpen} >cart</li>
        </ul>
    </div>
  )
}

export default Navbar