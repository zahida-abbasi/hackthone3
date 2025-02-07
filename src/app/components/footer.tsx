import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div><div className="flex flex-col">
    <div className="flex flex-col justify-center items-center px-16 py-24 w-full bg-indigo-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="-mb-5 max-w-full w-[1166px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-base max-md:mt-10">
              <div className="text-4xl font-bold text-black">Hekto</div>
              <div className="flex gap-5 justify-between py-1 pr-0.5 pl-5 mt-8 max-w-full rounded bg-white bg-opacity-50 w-[377px]">
                <div className="my-auto text-slate-400">Enter Email Address</div>
                <div className="px-10 py-2.5 font-medium text-indigo-50 bg-pink-500 rounded max-md:px-5">
                  Sign Up
                </div>
              </div>
              <div className="mt-6 text-slate-400">Contact Info</div>
              <div className="self-stretch mt-2.5 text-slate-400">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base text-slate-400 max-md:mt-10">
              <div className="self-start text-2xl font-semibold text-black">
                Catagories
              </div>
              <div className="self-start mt-11 max-md:mt-10">
                Laptops &amp; Computers
              </div>
              <div className="mt-5 max-md:mr-1.5">Cameras &amp; Photography</div>
              <div className="mt-5 max-md:mr-2.5">Smart Phones &amp; Tablets</div>
              <div className="mt-5">Video Games &amp; Consoles</div>
              <div className="mt-5 max-md:mr-1">Waterproof Headphones</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start text-base text-slate-400 max-md:mt-10">
              <div className="self-stretch text-2xl font-semibold text-black">
                Customer Care
              </div>
              <Link href="/login"><div className="mt-10 max-md:mt-10">My Account</div></Link>
              <div className="mt-5">Discount</div>
              <div className="mt-5">Returns</div>
              <div className="mt-5">Orders History</div>
              <div className="mt-5">Order Tracking</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-base text-slate-400 max-md:mt-10">
              <div className="text-2xl font-semibold text-black">Pages</div>
              <div className="mt-11 max-md:mt-10">Blog</div>
              <div className="mt-5">Browse the Shop</div>
              <div className="mt-5">Category</div>
              <div className="mt-5">Pre-Built Pages</div>
              <div className="self-stretch mt-5">Visual Composer Elements</div>
              <div className="mt-5">WooCommerce Pages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center px-16 py-4 w-full text-base font-semibold text-gray-400 bg-violet-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[960px]">
        <div>©Webecy - All Rights Reserved</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/166cec7a4b09460980bdcd9b91b29137a36ffaaf611e88e12607431059f887e3?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          className="object-contain shrink-0 w-20 aspect-[4.22]"
        />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer