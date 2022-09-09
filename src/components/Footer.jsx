import React from 'react'
import { facebook, instagram, twitter } from '../assets/icon'
import { logo } from '../assets/images'

const Footer = () => {
  return (
    <footer className="bg-black-0a pt-20 lg:pt-28 pb-24 lg:pb-32">
      <div className="layout-container flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="">
          <img src={logo} alt="logo" />
          <div className="mt-4 text-gray-999 text-sm">© 2018 Spoon Inc, All rights reserved.</div>
        </div>
        <div className="text-white flex items-start gap-12 lg:mr-14">
          <div className="flex flex-col">
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Features</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Premium</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Pricing</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">About</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Blog</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Contact</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Image License Info</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Powered by Webflow</a>
            <a href="#" className="text-[12px] mb-6 duration-150 hover:opacity-[.8]">Pricing</a>
          </div>
          <div className="flex ">
            <a href="#" className="mr-4 duration-150 hover:opacity-[.8]"><img src={facebook} alt="" /></a>
            <a href="#" className="mr-4 duration-150 hover:opacity-[.8]"><img src={instagram} alt="" /></a>
            <a href="#" className="mr-4 duration-150 hover:opacity-[.8]"><img src={twitter} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer