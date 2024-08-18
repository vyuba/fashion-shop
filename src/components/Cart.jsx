// import React from "react";
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react';
function Cart({ cartOpen,handleCartOpen }) {

    return (
        <div id="slidecarthq" className={`${cartOpen ? 'translate-x-0' : 'translate-x-[-100%]'} fixed inset-0 z-[9999] h-screen  overflow-hidden transition-all `}>
          <div className="slidecarthq-overlay absolute inset-0 bg-black bg-opacity-50" tabIndex="0" role="button" onClick={handleCartOpen}></div>
          <div
            className="slidecarthq bg-white h-screen fixed top-0 right-0 z-[100000] flex flex-col shadow-xl"
            style={{ width: 'min(100%, 400px)' }}
          >
            <header className="bg-gray-100 text-gray-800 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Cart</h2>
              <button onClick={handleCartOpen} aria-label="close cart" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </header>
            <div className="flex-grow flex items-center justify-center p-8">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4 text-gray-400"
                  viewBox="0 0 65 74"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="nonzero" fill="none">
                    <path
                      d="M64.407 9.856L53.605 0H11.371L.569 9.856A1.548 1.548 0 00.1 11.603c.235.619.843 1.031 1.524 1.031h61.727a1.62 1.62 0 001.522-1.031 1.545 1.545 0 00-.467-1.747z"
                      fill="#C4C4C4"
                    ></path>
                    <path
                      d="M63.351 9.927H1.624C.728 9.927 0 10.644 0 11.529v59.267C0 72.566 1.454 74 3.249 74h58.478c1.795 0 3.249-1.434 3.249-3.204V11.53c0-.885-.728-1.602-1.625-1.602z"
                      fill="#E4E4E4"
                    ></path>
                    <path
                      d="M32.488 45.122c-7.963 0-14.44-6.447-14.44-14.37v-4.79a1.6 1.6 0 011.605-1.596 1.6 1.6 0 011.604 1.596v4.79c0 6.163 5.04 11.177 11.23 11.177 6.192 0 11.231-5.014 11.231-11.177v-4.79a1.6 1.6 0 011.604-1.596 1.6 1.6 0 011.605 1.596v4.79c0 7.923-6.477 14.37-14.44 14.37z"
                      fill="#6D6D6D"
                    ></path>
                  </g>
                </svg>
                <p className="text-xl text-gray-600">Your cart is empty.</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Cart;