// import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const LoaderPage = () => {
    gsap.registerPlugin(useGSAP)
    useGSAP(
        ()=>{
            const tl = gsap.timeline();

            tl.to('.last-row', {
                y: -1650,
                duration: 1.95,  // 1.5 times the original duration
            })
            .to('.second-row', {
                y: -1650,
                duration: 1.95,
            }, "-=0.975")  // Start when last-row is halfway
            .to('.first-row', {
                y: -1650,
                duration: 1.95,
            }, "-=0.975") // Start when second-row is halfway
            .to('.loader-page', {
                y: '-100%',
                stagger: 1,
                duration: 1.95,
            }); // Start when second-row is halfway
        }
    )

  return (
    <div className="w-screen bg-stone-900   h-screen fixed z-[100000] overflow-hidden flex loader-text loader-page ">
      <div className="loader-numbers text-[110px] font-bold self-end  flex flex-row overflow-hidden  h-[130px] ml-4 mb-20">
        <div className="flex flex-col items-center   first-row w-fit loader-text">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>1</div>
        </div>
        <div className="flex flex-col items-center   second-row w-fit loader-text">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
        </div>
        <div className="flex flex-col items-center   w-fit last-row loader-text">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
