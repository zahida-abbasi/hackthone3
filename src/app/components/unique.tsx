import React from "react";
import { client } from "@/sanity/lib/client"; // Import your Sanity client
import Link from "next/link";

const Newfur = async () => {
  // Fetch data directly in the component
  const query = `*[_type == "unique"][0]{ 
    imageUrl,
    altText,
    heading
  }`;
  const bannerData = await client.fetch(query);

  if (!bannerData) {
    return <div>Loading...</div>; // Show loading if no data is found
  }

  return (
    <div>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          {/* Dynamically display image */}
          <img
            loading="lazy"
            src={bannerData.imageUrl}  // Use the fetched image URL
            alt={bannerData.altText}  // Use the fetched alt text
            className="object-contain grow w-full aspect-[1.01] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
            {/* Dynamically display heading */}
            <h2 className="self-stretch text-4xl font-bold tracking-wide leading-10 text-violet-950 max-md:max-w-full">
              {bannerData.heading} {/* Use the fetched heading */}
            </h2>
            <div
              className="flex gap-3 mt-7 text-base font-medium tracking-wide leading-none text-gray-400"
              role="list"
            >
              <div
                className="flex shrink-0 my-auto bg-rose-500 rounded-full h-[11px] w-[11px]"
                role="presentation"
                aria-hidden="true"
              />
              <div className="flex-auto max-md:max-w-full" role="listitem">
                All frames constructed with hardwood solids and laminates
              </div>
            </div>
            <div
              className="flex flex-wrap gap-3 mt-3.5 text-base font-medium tracking-wide leading-7 text-gray-400"
              role="list"
            >
              <div
                className="flex shrink-0 self-start mt-2.5 bg-blue-700 rounded-full h-[11px] w-[11px]"
                role="presentation"
                aria-hidden="true"
              />
              <div className="flex-auto max-md:max-w-full" role="listitem">
                Reinforced with double wood dowels, glue, screw - nails corner
                <br />
                blocks and machine nails
              </div>
            </div>
            <div
              className="flex gap-3 mt-3.5 text-base font-medium tracking-wide leading-none text-gray-400"
              role="list"
            >
              <div
                className="flex shrink-0 my-auto bg-teal-400 rounded-full h-[11px] w-[11px]"
                role="presentation"
                aria-hidden="true"
              />
              <div className="flex-auto" role="listitem">
                Arms, backs and seats are structurally reinforced
              </div>
            </div>
            <div className="flex gap-5 mt-10 max-w-full w-[289px]">
           <Link href="/shoppingcart"> <button
                className=" w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition sm:w-auto"
               
              >
                View more
              </button></Link>
              <div className="flex flex-col my-auto text-sm text-violet-950">
                <div className="font-semibold tracking-wide">
                  B&amp;B Italian Sofa
                </div>
                <div className="self-start">$32.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newfur;
