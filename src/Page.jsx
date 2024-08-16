// import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import heroVideo from '/public/hero video.mp4'
import Lottie from "lottie-react";
import videoJson from '/public/Animated video btn.json'
import { useEffect } from 'react';
// import Cart from './components/Cart';
function Page({ handleCartOpen }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const selectorBtn = document.querySelectorAll(".input-selector > input")
  console.log(selectorBtn)
  useGSAP(() => {
    const container = document.querySelector('.music-collection-container');
    const video = document.querySelector('video');
    const lottie = document.querySelector('.lottie');
    const tl = gsap.timeline({ paused: true }); // Pause timeline by default

    // Initial state for the container (hidden)
    gsap.set(container, { height:'300px' , opacity: 1 }); // Set initial scale and opacity

    tl.to(container, {
      ease: 'power1',
      duration: 1,
      height: '100%',
      opacity: 1, // Make the section visible after scaling
      scrollTrigger: {
        trigger: ".page-container", // Element to trigger the animation
        start: 'top top', // Start when container enters viewport
        end: '70% 30%', // End when bottom of container reaches 30% below viewport
        scrub: 1, // Scrub the animation smoothly based on scroll position
        pin: true, // Pin the container during animation
        // markers: true, // Add visual markers (optional)
      },
    });
    const handleMouseMove = (event) => {
      const rect = video.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      gsap.to(lottie, { x, y, duration: 0.3 }); // Animate Lottie's position
    };
    
    video.addEventListener('mousemove', handleMouseMove);
  });
  useEffect(() => {
    const selectorBtns = document.querySelectorAll('.input-selector > input');
    selectorBtns.forEach((btn) => {
      btn.addEventListener('click', handleCartOpen);
    });

    // Cleanup event listeners on unmount
    return () => {
      selectorBtns.forEach((btn) => {
        btn.removeEventListener('click', handleCartOpen);
      });
    };
  }, [handleCartOpen]);

  return (
    <div className="h-full w-full flex-col flex page-container">
      <div className='h-screen grid place-items-center'> 
      <div className="music-collection-container -z-0 w-full relative grid gap-3 overflow-hidden">
        <video
        autoPlay
        loop
        playsInline
        className="absolute inset-0 object-cover h-full w-full" src={heroVideo}></video>
      <Lottie className='w-20 lottie absolute' animationData={videoJson} loop={true} />;
      </div>
      </div>
      <section className="product-grid ">
      <div  className="product-item">
        <img className='main-image' src="/public/test/dtl.webp" alt="Product 1"/>
        <img className='reveal-onhover hidden' src="/public/test/Tono_saturacion1.png" alt="Product 1"/>
        <div className="product-details">
          <div className='product-name'>
          <p className='font-semibold text-sm'>WATERGUN TEE DYED QUARTZ BEIGE</p>
          <p className='font-medium text-gray-400 text-sm'>$101,300.00</p>
          </div>
          <div className='input-selector hidden gap-2 flex-row w-fit items-center justify-center px-2 text-sm'>
            <input className='border border-y border-solid px-3 border-gray-200 py-2' type="button" value="XS" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="S" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="M" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="L" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="XL" />
          </div>
        </div>
      </div>
      <div className="product-item">
        <img className='main-image' src="/public/test/ASTROF16.jpg" alt="Product 2"/>
        <img className='reveal-onhover hidden' src="/public/test/ASTROB16.jpg" alt="Product 1"/>
        <div className="product-details">
        <div className='product-name'>
          <p className='font-semibold text-sm'>WATERGUN TEE DYED QUARTZ BEIGE</p>
          <p className='font-medium text-gray-400 text-sm'>$101,300.00</p>
          </div>
          <div className='input-selector hidden gap-2 flex-row w-full items-center justify-center'>
            <input className='border border-y border-solid px-3 border-gray-200 py-2' type="button" value="XS" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="S" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="M" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="L" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="XL" />
          </div>
        </div>
      </div>
      <div className="product-item">
        <img className='main-image' src="/public/test/COSMOSBLUEF.png" alt="Product 2"/>
        <img className='reveal-onhover hidden' src="/public/test/COSMOSBLUEBACK.png" alt="Product 1"/>
        <div className="product-details">
        <div className='product-name'>
          <p className='font-semibold text-sm'>WATERGUN TEE DYED QUARTZ BEIGE</p>
          <p className='font-medium text-gray-400 text-sm'>$101,300.00</p>
          </div>
          <div className='input-selector hidden gap-2 flex-row w-full items-center justify-center'>
            <input className='border border-y border-solid px-3 border-gray-200 py-2' type="button" value="XS" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="S" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="M" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="L" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="XL" />
          </div>
        </div>
      </div>
      <div className="product-item">
        <img className='main-image' src="/public/test/dtl.webp" alt="Product 2"/>
        <img className='reveal-onhover hidden' src="/public/test/Tono_saturacion1.png" alt="Product 1"/>
        <div className="product-details ">
        <div className='product-name'>
          <p className='font-semibold text-sm'>WATERGUN TEE DYED QUARTZ BEIGE</p>
          <p className='font-medium text-gray-400 text-sm'>$101,300.00</p>
          </div>
          <div className='input-selector hidden gap-2 flex-row w-full items-center justify-center'>
            <input className='border border-y border-solid px-3 border-gray-200 py-2' type="button" value="XS" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="S" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="M" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="L" />
            <input className='border border-solid px-3 border-gray-200 py-2' type="button" value="XL" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Page