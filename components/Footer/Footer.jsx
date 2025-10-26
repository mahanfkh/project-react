import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="disable-select relative mt-auto" dir="rtl">
      <div className="bg-gray-200">
        {/* Contact Bar */}
        <div className="portlet" id="yw18">
          <div className="portlet-content">
            <div className="flex flex-col lg:flex-row justify-between text-gray-800 p-6 text-sm max-w-screen-xl mx-auto" dir="rtl">
              <div className="flex items-center mb-4 lg:mb-0">
                <span className="flex gap-2 items-center text-gray-600">
                  <span className="text-lg">📞</span>
                  <span>021-33902646</span>
                </span>
              </div>
              
              <div className="flex items-center mb-4 lg:mb-0 leading-7">
                <span className="flex gap-2 items-center text-gray-600">
                  <span className="text-xl">🕒</span>
                  <span>شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه ها از 10 صبح الی ساعت 16</span>
                </span>
              </div>
              
              <div className="flex items-center gap-2 leading-7 lg:items-center text-gray-600">
                <span className="text-xl mt-1 lg:mt-0">📍</span>
                <span>تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع</span> 
              </div>
              
              <button 
                onClick={scrollToTop}
                className={`hidden xl:flex bg-white text-xs text-gray-600 rounded-xl p-2 pr-2 pl-1 cursor-pointer hover:bg-gray-100 items-center w-24 justify-between leading-5 shadow-md transition-all duration-300 ${
                  showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                dir="ltr"
              >
                <span>↑</span>
                <span>برو بالا</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 py-4 lg:py-8" dir="rtl">
          
          <div className="justify-center items-center flex flex-col gap-8 pt-8 lg:pt-0">
            {/* Logo */}
            <img 
              style={{ maxWidth: '190px' }} 
              src="https://www.dastresi.com/images/logo/logo.png" 
              alt="فروشگاه اینترنتی دسترسی"
              className="max-w-[190px]"
            />

            {/* Social Desktop Icon */}
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
              <div className="flex text-sm text-gray-700">با ما در ارتباط باشید:</div>
              <a 
                href="https://www.instagram.com/dastresii" 
                className="px-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="../../images/instagram.jpeg" 
                  alt="اینستاگرام دسترسی"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex-1">
            <div className="font-bold text-xl text-gray-800 mb-4 text-right">فروشگاه اینترنتی دسترسی</div>
            <div className="text-gray-600 leading-7 text-justify" dir="rtl">
              <div className="portlet" id="yw19">
                <div className="portlet-content text-right">
                  فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال 1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه، تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه میدهد.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <h3 className="font-bold text-xl mb-4 text-right text-gray-800">دسترسی سریع</h3>
            <div className="portlet" id="4">
              <div className="portlet-content">
                <div className="flex flex-row gap-16 justify-between" dir="rtl">
                  <div className="flex flex-col text-right">
                    <a href="/customer-club" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      باشگاه مشتریان
                    </a>
                    <a href="/faq" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      سوالات متداول
                    </a>
                    <a href="/blog" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      بلاگ
                    </a>
                    <a href="/terms" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      شرایط و قوانین
                    </a>
                    <a href="/contact" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      ارتباط ما
                    </a>
                    <a href="/about" className="text-sm text-gray-600 hover:text-black mb-4 block transition-colors duration-200">
                      درباره ما
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 w-full lg:w-auto flex items-center justify-center">
            <a 
              referrerPolicy="origin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                referrerPolicy="origin" 
                src="../../images/enamad.JPG" 
                alt="نماد اعتماد الکترونیکی" 
                style={{ cursor: 'pointer' }} 
                className="max-w-[100px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="font-medium text-sm text-center bg-blue-600 text-white py-3" dir="rtl">
        تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;