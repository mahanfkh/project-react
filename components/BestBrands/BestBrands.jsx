import { useEffect, useState } from "react";

const BestBrands = () => {
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const mockData = [
          {
            id: 1,
            name: "انکر",
            image: "/images/logo-1.jpg",
          },
          {
            id: 2,
            name: "آینوبن",
            image: "/images/inoben.jpg",
          },
          {
            id: 3,
            name: "راوپاور",
            image: "/images/logo-2.jpg",
          },
          {
            id: 4,
            name: "مک دودو",
            image: "/images/mcdodo.jpg",
          },
          {
            id: 5,
            name: "کملیون",
            image: "/images/cameilon.jpg",
          },
          {
            id: 6,
            name: "پاورولوژی",
            image: "/images/powerlogy.jpg",
          },
          {
            id: 7,
            name: "ایس فست",
            image: "/images/acefast.jpg",
          }
        ];

        setBrands(mockData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const itemsPerPage = 6;
  
  // ایجاد آرایه دورانی از برندها
  const getCircularBrands = () => {
    if (brands.length === 0) return [];
    
    const result = [];
    const totalItems = brands.length;
    
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentPage + i) % totalItems;
      result.push(brands[index]);
    }
    
    return result;
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % brands.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + brands.length) % brands.length);
  };

  useEffect(() => {
    if (brands.length <= itemsPerPage) return;
    
    const interval = setInterval(() => {
      nextPage();
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  const currentBrands = getCircularBrands();

  return (
    <>
    <br />
    <div className="max-w-screen-xl mx-auto mb-4 mt-5  bg-white/50 p-10">
      <div className="portlet" id="yw5">
        <div className="portlet-content">
          <div className="md:rounded-xl max-w-screen-xl mx-auto relative px-4">
            <div className="md:grid grid-cols-6 grid-rows-1">
              <div className="col-span-6">
                <div className="flex flex-row items-center relative mb-3">                
                  <div className="flex flex-1 flex-col">
                    <div className="flex  mb-2">
                      <h1 className="text-2xl font-bold text-black right-0 absolute bottom-0.5">
                        محبوب ترین برندها
                      </h1>
                    </div>
                  </div>
                </div>
                
                {/* Desktop: 6 brands per row with circular carousel */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="grid grid-cols-6 gap-4">
                      {currentBrands.map((brand, index) => (
                        <a 
                          key={`${brand.id}-${currentPage}-${index}`}
                          href={brand.href}
                          className="item flex flex-col items-center p-4 justify-center rounded-xl shadow-md bg-white my-4 hover:shadow-lg transition-shadow duration-300 hover-title img-black"
                        >
                          <img 
                            src={brand.image} 
                            className="w-24 h-24 object-contain" 
                            alt={brand.name}
                          />
                          <span className="text-sm mt-2 text-center text-gray-700">
                            {brand.name}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    {brands.length > itemsPerPage && (
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
                </div>

                {/* Mobile: 3 brands per row - نمایش 6 برند اول */}
                <div className="grid grid-cols-3 gap-3 md:hidden">
                  {brands.slice(0, 6).map((brand) => (
                    <a 
                      key={brand.id}
                      className="item flex flex-col items-center p-3 justify-center rounded-xl shadow-md bg-white my-2 hover-title img-black"
                    >
                      <img 
                        src={brand.image} 
                        className="w-16 h-16 object-contain" 
                        alt={brand.name}
                      />
                      <span className="text-xs mt-1 text-center text-gray-700">
                        {brand.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BestBrands;