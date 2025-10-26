import { useEffect, useState } from "react";

const MostSale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mockData = [
          {
            id: 1,
            name: "باتری نیم قلمی شیامی",
            price: "2,295,000",
            originalPrice: null,
            image: "/images/battrey-xiaomi-NIM-1161.jpg",
            colors: ["#000000"],
            inStock: true,

          },
          {
            id: 2,
            name: "کیبورد بلوتوثی",
            price: "580,000",
            originalPrice: "600,000",
            image: "/images/blu keyboard.jpg",
            colors: ["#000000"],
            inStock: true,

          },
          {
            id: 3,
            name: "هندزقری بلوتوثی",
            price: "5,980,000",
            originalPrice: "6,120,000",
            image: "/images/blu handsfree.jpg",
            colors: ["#000000"],
            inStock: true,
          },
          {
            id: 4,
            name: "شارژر دیواری 100 واتی",
            price: "950,000",
            originalPrice: null,
            image: "/images/100w charger.jpg",
            colors: ["#FFFFFF"],
            inStock: true,
          },
          {
            id: 5,
            name: "هندزفری بلوتوی انکر",
            price: "3,200,000",
            originalPrice: null,
            image: "/images/ANKER3958-22.jpg",
            colors: ["#000000"],
            inStock: true,
          },
          {
            id: 6,
            name: "هاب تایپ سی",
            category: "کابل شارژ تایپ سی به لایتنینگ",
            price: "550,000",
            originalPrice: "580,000",
            image: "/images/hub.jpg",
            colors: ["#000000"],
            inStock: true,
          },
          {
            id: 7,
            name: "پمپ باد گرین لاین",
            price: "1,500,000",
            originalPrice: null,
            image: "/images/POMP-GREEN-11.jpg",
            colors: ["#000000"],
            inStock: true,

          },
          {
            id: 8,
            name: "شارژر مک دوو",
            price: "800,000",
            originalPrice: "950,000",
            image: "/images/MCDODO-4100-11.jpg",
            colors: ["#000000"],
            inStock: true,
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
    <div className="max-w-screen-xl mx-auto  bg-white/50">
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
                      پرفروش ترین محصولات
                    </span>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-5">
                      {getCurrentProducts().map((product) => (
                        <a 
                          key={product.id}
                          className=" item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex gap-2 flex-col">
                            <img 
                              alt={product.name} 
                              className="mx-auto rounded-t-xl h-40 object-cover text-black text-lg" 
                              src={product.image}
                            />
                            <div className="flex flex-col justify-around flex-1 p-2 text-center  text-black text-lg bg-danger">
                              <h1 className="leading-6 h-12 overflow-hidden  text-black text-lg">
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
                  <br/>
                  <br/>
                </div>

                <div className="grid grid-cols-2 gap-4 md:hidden">
                  {products.slice(0, 4).map((product) => (
                    <a 
                      key={product.id}
                      className="item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2"
                    >
                      <div className="flex gap-2 flex-col  text-black text-lg">
                        <img 
                          alt={product.name} 
                          className="mx-auto rounded-t-xl h-32 object-cover  text-black text-lg" 
                          src={product.image}
                        />
                        <div className="flex flex-col justify-around flex-1 p-2 text-center">
                          <h3 className="leading-5  h-10 overflow-hidden  text-black text-lg">
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
                          <div className="flex flex-row items-center justify-center text-center pb-2 px-2  text-black text-lg">
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
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostSale;