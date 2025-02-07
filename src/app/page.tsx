
import Baner from "./components/baner";
import Bar from "./components/bar";
import Chair from "./components/chair";
import ShopexOffers from "@/app/components/offer1";
import Latestblog from "./components/latestblog";
import Newfur from "./components/newfur";
import Sofa from "./components/sofa";
import Topcategory from "./components/topcategory";
import Trendingproducts from "@/app/components/trendindproducts1";
import Twentyprcnt from "./components/twentyprcnt";
import Unique from "./components/unique";
import Trendingproducts1 from "@/app/components/trendindproducts1";

export default function Home() {
  return (
  <>
   
    <Newfur/>
    <div className="mx-32">
    <h1 className='text-3xl font-bold text-[#1A0B5B] text-center my-10'>Featured products</h1> 
    <Chair/>
    <h1 className='text-3xl font-bold text-[#1A0B5B] text-center my-10 '>Latest products</h1> 

    <Sofa/>
    <ShopexOffers/>
    <Unique/>
    <Trendingproducts1/>
    <div className="mt-10 max-w-full w-[1160px] ">
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
      <div
        className="flex flex-col pt-9 pr-1.5 pb-0.5 pl-6 mx-auto w-full font-semibold text-center bg-fuchsia-50 shadow-2xl max-md:pl-5 max-md:mt-7"
        role="region"
        aria-label="Special Offer Section"
      >
        <div className="self-start text-2xl text-violet-950">
          23% off in all products
        </div>
        <div className="flex gap-5 justify-between text-base text-pink-500">
          <a
            href="#shop-now"
            className="self-start mt-2.5 underline decoration-auto decoration-solid underline-offset-auto focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Shop Now - 23% off all products"
          >     
            Shop Now
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/53c562534c652dc8e15a536ff73022bf73ff848c30fd0687e027ac27d61da1ee?apiKey=48515e2413874846bf60cd2409ef14d1&"
            alt="Featured product showcase"
            className="object-contain shrink-0 max-w-full aspect-[1.03] w-[213px]"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
      <div
        className="flex flex-col grow items-start pt-9 pr-1.5 pb-0.5 pl-6 w-full font-semibold text-center bg-indigo-50 shadow-2xl max-md:pl-5 max-md:mt-7"
        role="region"
        aria-label="Collection Showcase"
      >
        <div className="text-2xl text-violet-950">23% off in all products</div>
        <a
          href="#view-collection"
          className="mt-3 text-base text-pink-500 underline decoration-auto decoration-solid underline-offset-auto focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="View Collection - 23% off all products"
        >
          View Collection
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1c53e19376bd0518a58de1424b011b617b6642cc35d627edeaa0b28c95281562?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Collection preview"
          className="object-contain self-end mt-1.5 max-w-full aspect-[1.81] w-[312px]"
        />
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
      <div
        className="flex flex-col mt-1.5 w-full max-md:mt-8"
        role="region"
        aria-label="Featured Products List"
      >
        <div className="flex gap-2.5">
          <div className="flex flex-col justify-center px-5 py-0.5 bg-neutral-100 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/325c653a80aca875417518be916c28dc2c9828392ccc3a782e105bb89e2ac8a6?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt="Executive Seat chair product image"
              className="object-contain w-16 aspect-[0.9]"
            />
          </div>
          <div className="flex flex-col my-auto text-center text-violet-950">
            <h3 className="text-base font-semibold">Executive Seat chair</h3>
            <span
              className="self-start mt-1.5 text-xs"
              aria-label="Price: $32.00"
            >
              $32.00
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 mt-5">
          <div className="flex flex-col justify-center px-5 py-1 bg-neutral-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/a045b6a60df39454f8bac9f1fda8f743fcab5eb3577bb66b1337cec1908f227d?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt="Executive Seat chair product image"
              className="object-contain aspect-square w-[67px]"
            />
          </div>
          <div className="flex flex-col my-auto text-center text-violet-950">
            <h3 className="text-base font-semibold">Executive Seat chair</h3>
            <span
              className="self-start mt-1.5 text-xs"
              aria-label="Price: $32.00"
            >
              $32.00
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 mt-5">
          <div className="flex flex-col justify-center px-4 py-1 bg-neutral-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d7ed449c2ff7a1f36bab27b2b711fdd1a9544a90aeb85ccd632ad9145cf37cf1?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt="Executive Seat chair product image"
              className="object-contain aspect-square w-[67px]"
            />
          </div>
          <div className="flex flex-col my-auto text-center text-violet-950">
            <h3 className="text-base font-semibold">Executive Seat chair</h3>
            <span
              className="self-start mt-1.5 text-xs"
              aria-label="Price: $32.00"
            >
              $32.00
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<h1 className='text-3xl font-bold text-[#1A0B5B] text-center my-10 '>Discount Item</h1> 
   <Twentyprcnt />
   <h1 className='text-3xl font-bold text-[#1A0B5B] text-center my-10 '>Top Categories</h1> 
   <Topcategory/>
   <Baner/>
   <Latestblog/>
    </div></>
  );
}
