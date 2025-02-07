import React from 'react'

const Navbar = () => {
  return (
    <div><nav
    className="flex gap-10 items-center"
    role="navigation"
    aria-label="Main navigation"
  >
    <div className="grow self-stretch my-auto text-4xl font-bold text-indigo-950">
      <a
        href="/"
        className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        tabIndex={0}
      >
        Hekto
      </a>
    </div>
    <div className="flex gap-5 self-stretch my-auto text-base leading-none max-md:max-w-full">
      <div className="flex gap-0.5 text-pink-500 whitespace-nowrap">
        <a
          href="/"
          className="grow hover:underline focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Home
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27da48b7163fed43d9972bdf4c6ae46d93ba517c8f905b923f09cd4772384daa?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          className="object-contain shrink-0 my-auto w-3 aspect-square"
          alt=""
          role="presentation"
        />
      </div>
      <div className="flex flex-auto gap-9 text-indigo-950">
        <a
          href="/pages"
          className="grow hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Pages
        </a>
        <a
          href="/products"
          className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Products
        </a>
        <a
          href="/blog"
          className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Blog
        </a>
        <a
          href="/shop"
          className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Shop
        </a>
        <a
          href="/contact"
          className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Contact
        </a>
      </div>
    </div>
    <div className="flex flex-col items-end self-stretch px-16 border-2 border-gray-200 border-solid">
      <div className="flex shrink-0 h-10 bg-pink-500 w-[51px]" />
    </div>
  </nav>
  </div>
  )
}

export default Navbar