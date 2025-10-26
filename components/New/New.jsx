import { useEffect, useState } from "react";

const New = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // در واقعیت اینجا API واقعی فراخوانی می‌شود
        // const response = await fetch('https://api.example.com/products');
        // const data = await response.json();
        
        // نمونه داده‌های موقت
        const mockData = [
          {
            id: 1,
            name: "شارژر رومیزی 140 واتی الدینیو مدل Q4010",
            category: "شارژر رومیزی",
            price: "2,295,000",
            originalPrice: null,
            image: "../../images/table charger.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 2,
            name: "جت فن 150 واتی گرین مدل Green Lion",
            category: "انواع گجت های جذاب",
            price: "580,000",
            originalPrice: "600,000",
            image: "../../images/JETFAN.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 3,
            name: "پاوربانک 27600 میلی آمپر 130 واتی اورایمو",
            category: "پاوربانک و جامپ استارتر",
            price: "5,980,000",
            originalPrice: "6,120,000",
            image: "../../images/power 27600.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 4,
            name: "شارژر دیواری 20 واتی به همراه کابل آنکر",
            category: "شارژر دیواری",
            price: "950,000",
            originalPrice: null,
            image: "../../images/charger 20w.jpg",
            colors: ["#FFFFFF"],
            inStock: true,
            href: "#"
          },
          {
            id: 5,
            name: "پاوربانک 50000 میلی آمپر 22.5 واتی گرین",
            category: "پاوربانک و جامپ استارتر",
            price: "3,200,000",
            originalPrice: null,
            image: "../../images/power 50000.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 6,
            name: "کابل شارژ مگنتی تایپ سی به لایتنینگ 36 واتی مک دودو",
            category: "کابل شارژ تایپ سی به لایتنینگ",
            price: "550,000",
            originalPrice: "580,000",
            image: "../../images/cable type c.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 7,
            name: "هدفون بی‌سیم بلوتوثی",
            category: "هدفون و هندزفری",
            price: "1,500,000",
            originalPrice: null,
            image: "../../images/handsfree.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          },
          {
            id: 8,
            name: "جامپ استارت",
            category: "جامپ استارت",
            price: "800,000",
            originalPrice: "950,000",
            image: "../../images/janebi.jpg",
            colors: ["#000000"],
            inStock: true,
            href: "#"
          }
        ];

        setProducts(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const getCurrentProducts = () => {
    const startIndex = currentPage * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (totalPages <= 1) return;
    
    const interval = setInterval(() => {
      nextPage();
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="max-w-screen-xl mx-auto mb-8 bg-white/50">
      <div className="portlet" id="yw3">
        <div className="portlet-content">
          <div className="px-4 pb-4 md:px-12 md:pb-1 bg-gray-e2 xl:rounded-xl mb-8 xl:mx-4">
            <div className="md:grid grid-cols-6 grid-rows-1">
              <div className="col-span-6">
                <div className="flex flex-row items-center relative py-0 md:py-2">
                  <div className="flex w-full justify-between py-6">
                    <a 
                      href="https://www.dastresi.com/products?sort=0&avaliable_products=1" 
                      style={{color: '#4e5e60'}} 
                      className="flex text-base font-normal items-center gap-2"
                    >
                      <span className="text-sm hidden md:block text-black">مشاهده همه محصولات</span>
                    </a>
                    <span className="text-2xl text-center font-bold text-black">
                      ...همین الان موجود شد
                    </span>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-5">
                      {getCurrentProducts().map((product) => (
                        <a 
                          key={product.id}
                          className="item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex gap-2 flex-col">
                            <img 
                              alt={product.name} 
                              className="mx-auto rounded-t-xl h-40 object-cover" 
                              src={product.image}
                            />
                            <div className="flex flex-col justify-around flex-1 p-2 text-center">
                              <span className="text-xs text-gray-800 mb-2">
                                {product.category}
                              </span>
                              <h1 className="leading-6  h-12 overflow-hidden text-lg text-black">
                                {product.name}
                              </h1>
                            </div>
                          </div>

                          {product.inStock ? (
                            <>
                              <div className="flex flex-col gap-2 px-4">
                                {product.originalPrice && (
                                  <div className="text-right text-gray-500 line-through text-sm h-5">
                                    {product.originalPrice}
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-row items-center justify-end pb-3 px-4">
                                <span className="text-blue-600 font-bold text-xl">
                                  {product.price}
                                </span>
                                <span className="text-gray-600 text-xs mr-1">تومان</span>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center justify-center border-t border-gray-200 bg-red-100 text-red-800 text-sm rounded-b-xl py-4">
                              ناموجود
                            </div>
                          )}
                        </a>
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="قبلی"
                          onClick={prevPage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          aria-label="بعدی"
                          onClick={nextPage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200"
                        >
                          ›
                        </button>
                      </>
                    )}

                  </div>
                  <br />
                </div>

                <div className="grid grid-cols-2 gap-4 md:hidden">
                  {products.slice(0, 4).map((product) => (
                    <a 
                      key={product.id}
                      href={product.href} 
                      className="item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2"
                    >
                      <div className="flex gap-2 flex-col">
                        <img 
                          alt={product.name} 
                          className="mx-auto rounded-t-xl h-32 object-cover" 
                          src={product.image}
                        />
                        <div className="flex flex-col justify-around flex-1 p-2 text-center">
                          <span className="text-xs text-gray-500 mb-1">
                            {product.category}
                          </span>
                          <h3 className="leading-5 text-xs h-10 overflow-hidden">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {product.inStock ? (
                        <>
                          <div className="flex flex-col gap-1 px-2">
                            {product.originalPrice && (
                              <div className="text-center text-gray-500 line-through text-xs">
                                {product.originalPrice}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-row items-center justify-center text-center pb-2 px-2">
                            <span className="text-blue-600 font-bold text-lg">
                              {product.price}
                            </span>
                            <span className="text-gray-600 text-xs mr-1">تومان</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-center border-t border-gray-200 bg-red-100 text-red-800 text-xs rounded-b-xl py-3">
                          ناموجود
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;