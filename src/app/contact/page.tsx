import React from 'react';

const Page = () => {
  return (
    <div className=" my-32 ">
     <div
    className="flex flex-col justify-center items-start px-20 py-28 mt-6 w-full text-center bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full"
    role="region"
    aria-label="Shop Navigation"
  >
    <div className="flex flex-col mb-0 max-w-full w-[315px] max-md:mb-2.5">
      <h1 className="text-4xl font-bold text-indigo-950">Contact Us</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-1.5 self-start mt-2.5 text-base font-medium">
          <li className="flex gap-1 text-black">
            <a
              href="/"
              className="grow hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ml-20"
            >
              Home
            </a>
            <span aria-hidden="true">.</span>
          </li>
          <li className="flex gap-1 text-black">
            <a
              href="/pages"
              className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Pages
            </a>
            <span className="text-pink-500" aria-hidden="true">
              .
            </span>
          </li>
          <li className="text-pink-500" aria-current="page">
          Contact Us
          </li>
        </ol>
      </nav>
    </div>
  </div>

      {/* Flex Container to display Information About Us and Contact Way side by side */}
      <div className="flex gap-12 mt-44 max-md:flex-col max-md:gap-8 mx-11 ml-16">
        {/* Information About Us Section */}
        <section className="flex-1 text-4xl font-bold leading-none text-violet-950 max-md:mt-10">
          <h2>Information About Us</h2>
          <div className="mt-6 text-base font-semibold leading-7 text-slate-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </div>

          <div className="flex gap-3.5 mt-14 max-md:mt-10" role="list" aria-label="Social Media Links">
            <div className="flex shrink-0 bg-violet-700 rounded-full h-[25px] w-[25px]" role="listitem" tabIndex={0} aria-label="Social Media Link 1" />
            <div className="flex shrink-0 bg-pink-500 rounded-full h-[25px] w-[25px]" role="listitem" tabIndex={0} aria-label="Social Media Link 2" />
            <div className="flex shrink-0 bg-cyan-400 rounded-full h-[25px] w-[25px]" role="listitem" tabIndex={0} aria-label="Social Media Link 3" />
          </div>
        </section>

        {/* Contact Way Section */}
        <section className="flex-1 text-4xl font-bold leading-none text-violet-950 max-md:mt-10">
          <h2>Contact Way</h2>
          <div className="flex flex-col text-base font-semibold leading-relaxed max-w-[489px] text-slate-400" role="region" aria-label="Contact Information">
            <div className="flex gap-9 self-start">
              <div className="flex gap-4">
                <div className="flex shrink-0 my-auto bg-violet-700 rounded-full h-[45px] w-[45px]" role="presentation" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href="tel:877-67-88-99" className="self-start hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2" tabIndex={0}>
                    Tel: 877-67-88-99
                  </a>
                  <a href="mailto:shop@store.com" className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2" tabIndex={0}>
                    E-Mail: shop@store.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex shrink-0 my-auto bg-pink-500 rounded-full fill-pink-500 h-[45px] w-[45px]" role="presentation" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href="#support" className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" tabIndex={0}>
                    Support Forum
                  </a>
                  <div className="self-start">For over 24hr</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-12 max-md:mt-10">
              <div className="flex flex-1 gap-4">
                <div className="flex shrink-0 my-auto bg-orange-300 rounded-full h-[45px] w-[45px]" role="presentation" aria-hidden="true" />
                <div className="flex flex-col not-italic">
                  <div className="max-md:mr-2.5">20 Margaret St, London</div>
                  <div>Great Britain, 3NM98-LK</div>
                </div>
              </div>
              <div className="flex flex-1 gap-4">
                <div className="flex shrink-0 my-auto bg-emerald-400 rounded-full h-[45px] w-[45px]" role="presentation" aria-hidden="true" />
                <div className="flex flex-col">
                  <div>Free standard shipping</div>
                  <div className="self-start">on all orders.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="mt-44 text-4xl font-bold leading-none text-violet-950 max-md:mt-10 mx-36">
          <h2>Get In Touch</h2>
        </div>
        <div className="mt-9 text-base font-semibold leading-7 text-slate-400 max-md:max-w-full mx-36">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices</p> <p> tristique ameterat vitae eget dolor lobortis quis bibendum quam.</p>
        </div>
      </section>

      <div>
      <div className='flex'>
      <form className="flex flex-col text-base rounded w-full sm:max-w-[534px] mx-36">
  <div className="flex flex-wrap gap-6 w-full tracking-normal">
    <div className="grow">
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name*"
        className="w-full px-3 py-3.5 rounded border border-solid border-slate-400 border-opacity-70"
        aria-required="true"
      />
    </div>
    <div className="grow">
      <label htmlFor="email" className="sr-only">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your E-mail"
        className="w-full px-3 py-3.5 rounded border border-solid border-slate-400 border-opacity-70"
      />
    </div>
  </div>
  <div className="mt-9">
    <label htmlFor="subject" className="sr-only">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="Subject*"
      className="w-full px-3 py-3.5 tracking-normal rounded border border-solid border-slate-400 border-opacity-70"
      aria-required="true"
    />
  </div>
  <div className="mt-12">
    <label htmlFor="message" className="sr-only">
      Type Your Message
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Type Your Message*"
      className="w-full px-3 pt-4 pb-28 tracking-normal rounded border border-solid border-slate-400 border-opacity-70"
      aria-required="true"
    />
  </div>
  <button
    type="submit"
    className="self-start px-11 py-2.5 mt-8 leading-relaxed text-white bg-pink-500 rounded"
  >
    Send Mail
  </button>
</form>

<div className='ml-32 -mt-12'>
<div
  className="flex flex-col max-w-[692px]"
  role="region"
  aria-label="Circular dots section"
>
  <div className="flex z-10 flex-wrap w-full max-md:max-w-full">
    <div
      className="flex shrink-0 my-auto bg-indigo-400 rounded-full h-[18px] w-[18px] max-md:mr-0"
      role="presentation"
      aria-hidden="true"
    />
    <div className="flex flex-col grow shrink-0 px-5 pt-5 pb-11 rounded-full border border-indigo-200 border-solid basis-0 w-fit max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/9cc356fbb528bbe5a401b4453b4f63dd4f6da88d639cc31b6322aeac7a7955af?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain w-full rounded-full border border-solid aspect-square border-slate-400 max-md:max-w-full"
      />
    </div>
  </div>
  <div
    className="flex shrink-0 self-center mt-0 ml-5 bg-indigo-400 rounded-full h-[18px] w-[18px]"
    role="presentation"
    aria-hidden="true"
  />
</div>

</div>



</div>


      </div>
     
    </div>
  );
};

export default Page;
