// import React from 'react'
import coldCulture from '/public/new-logo-offset2.png'
function Navbar() {
  return (
    <div className="w-full z-50 fixed px-4 py-3">
        <ul className="w-full flex justify-between items-center capitalize">
            <li className='uppercase text-sm font-semibold navLinks'>collection</li>
            <li className="text-xl w-32 flex items-center justify-center font-semibold uppercase">
                <img className='' src={coldCulture} alt="" />
            </li>
            <li className='uppercase text-sm font-semibold navLinks'>shop</li>
        </ul>
    </div>
  )
}

export default Navbar