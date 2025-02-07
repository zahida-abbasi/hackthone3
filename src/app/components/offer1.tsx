const ShopexOffers = () => {
    const offers = [
      {
        icon: "/delivery.png", 
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "/cashback.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "quality.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "support.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
    ];
  
    return (
      <div className="text-center bg-white py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <img src={offer.icon} alt={offer.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-semibold text-blue-900">{offer.title}</h3>
              <p className="text-gray-500 text-sm text-center mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShopexOffers;
  