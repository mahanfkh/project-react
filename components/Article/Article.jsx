import { useEffect, useState } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const mockData = [
          {
            id: 1,
            title: "چرا آیفون من شارژ نمی‌شود؟ راهنمای رفع مشکل",
            image:
              "/images/Why-iPhone-is-not-charging- dastresiArtboard 1 copy.jpg",
          },
          {
            id: 2,
            title:
              "کابل MFi چیست؟ : ناجی باتری آیفون شما یا یک حقه تبلیغاتی...",
            image: "/images/what-is-mfi-apple-dastresi-Artboard 1 copy 3.jpg",
          },
          {
            id: 3,
            title:
              "شارژ بی‌سیم در برابر شارژ با کابل: کدام یک برای آیفون شما بهتر است؟",
            image:
              "/images/wireless-charging-vs-charger-dastresiArtboard 1.jpg",
          },
          {
            id: 4,
            title: "مشکلات رایج کابل شارژ آیفون و راه‌حل‌های آن",
            image:
              "/images/Maintenance-of-iPhone-cable-dastresiArtboard 1 copy.jpg",
          },
          {
            id: 5,
            title:
              "بهترین کابل شارژ برای آیفون: راهنمای کامل انتخاب در ۵ دقیقه!",
            image: "/images/iphone-cable-charger-dastresiArtboard 1.jpg",
          },
          {
            id: 6,
            title: "خرید بهترین هندزفری سیمی تا ۵۰۰ تومان",
            image: "/images/wired-handsfree-phone-dastresi-.jpg",
          },
          {
            id: 7,
            title: "معرفی ۵ مدل از بهترین میکروفون بویا",
            image:
              "/images/best-smelling-microphone-dastresi-Artboard 1 copy 2 (1).jpg",
          },
          {
            id: 8,
            title: "راهنمای خرید بهترین میکروفون زیر ۱ میلیون تومان",
            image: "/images/Microphone-under-1-millionArtboard 1 (1).jpg",
          },
        ];

        setArticles(mockData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const itemsPerPage = 4;

  // ایجاد آرایه دورانی از مقالات
  const getCircularArticles = () => {
    if (articles.length === 0) return [];

    const result = [];
    const totalItems = articles.length;

    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentPage + i) % totalItems;
      result.push(articles[index]);
    }

    return result;
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % articles.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    if (articles.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const currentArticles = getCircularArticles();

  return (
    <div className="max-w-screen-xl mx-auto pb-16 bg-white/50">
      <div className="portlet" id="yw6">
        <div className="portlet-content">
          <div className="md:grid grid-cols-6 grid-rows-1">
            <div className="col-span-6 px-4">
              <div className="flex w-full justify-between pt-6 pb-2">
                <div className="flex flex-1 flex-col">
                  <div className="flex w-full justify-between py-6">
                    <a
                      href="/blog"
                      className="flex text-base font-normal items-center text-gray"
                    >
                      <span className="hidden md:block text-black">
                        ورود به بلاگ
                      </span>
                    </a>
                    <span className="text-2xl text-center font-bold text-black">
                      آخرین مقالات
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="grid grid-cols-4 gap-5">
                    {currentArticles.map((article, index) => (
                      <a
                        key={`${article.id}-${currentPage}-${index}`}
                        className="item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 hover:shadow-lg transition-shadow duration-300 hover-title"
                      >
                        <div className="flex flex-col">
                          <img
                            className="mx-auto w-full h-48 object-cover rounded-t-xl"
                            alt={article.title}
                            src={article.image}
                          />

                          <div className="flex flex-col justify-around flex-1 p-4 text-center">
                            <h3 className="leading-6 text-m h-16 overflow-hidden en_num flex items-center justify-center text-black t">
                              <span>{article.title}</span>
                            </h3>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {articles.length > itemsPerPage && (
                    <>
                      <button
                        type="button"
                        aria-label="قبلی"
                        onClick={prevPage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80  rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label="بعدی"
                        onClick={nextPage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80  rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
                {articles.slice(0, 3).map((article) => (
                  <a
                    key={article.id}
                    className="item flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 hover-title"
                  >
                    <div className="flex flex-col">
                      <img
                        className="mx-auto w-full h-40 object-cover rounded-t-xl"
                        alt={article.title}
                        src={article.image}
                      />

                      <div className="flex flex-col justify-around flex-1 p-3 text-center">
                        <h3 className="leading-6 text-sm h-14 overflow-hidden en_num flex items-center justify-center">
                          <span>{article.title}</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 md:hidden">
                {articles.slice(0, 3).map((article) => (
                  <a
                    key={article.id}
                    className="item flex flex-row justify-between rounded-xl shadow-md bg-white mb-2 hover-title"
                  >
                    <div className="flex flex-row w-full">
                      <img
                        className="w-32 h-32 object-cover rounded-r-xl"
                        alt={article.title}
                        src={article.image}
                      />

                      <div className="flex flex-col justify-center flex-1 p-3 text-right">
                        <h3 className="leading-5 text-sm overflow-hidden en_num">
                          <span>{article.title}</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
