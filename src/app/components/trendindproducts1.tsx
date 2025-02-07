export default function Trendingproducts1() {
    return (
      <div className="max-w-7xl mx-auto ml-3 py-8">
        {/* Trending Products Heading */}
        <h1 className='text-3xl font-bold text-[#1A0B5B] text-center my-10 '>Trending products</h1> 
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair1.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair2.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair3.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair4.png" },
          ].map((product, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <img src={product.image} alt={product.title} className="rounded mb-4" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">
                <span className="text-black font-bold">{product.price}</span>{" "}
                <span className="line-through">{product.originalPrice}</span>
              </p>
            </div>
          ))}
        </div>
  
        {/* Promo and Side Products Section */}
      

    {/* Side Products Section */}
   

   

    </div>
    );
  }
  