
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="navbar shadow bg-white backdrop-blur-md border-b border-gray-200 px-8">
        <div className="flex-1">
          <div className="flex items-center justify-between w-full">
            <a
              href="#"
              className="btn bg-[#0064E6] hover:bg-[#004EB3] text-white font-medium btn-md p-[10px] ms-4 whitespace-nowrap rounded-md"
            >
              ورود و ثبت نام
            </a>
            <div className="left-20 absolute">
              <a
                href="/basket"
                className="flex items-center justify-center hover:text-[#0064E6] relative text-gray-700 rounded-xl text-sm w-40 h-20 ms-6 p-[20px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f"
                  className=""
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
                <span className="cursor-pointer absolute mb-8 ms-6 flex items-center justify-center rounded-full text-white font-medium basket-count shadow w-5 h-5 text-xs bg-[#E60023]">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-gray-600 text-[14px]">
            <li>
              <a className="hover:text-[#0064E6]">درباره ما</a>
            </li>
            <li>
              <a className="hover:text-[#0064E6]">ارتباط با ما</a>
            </li>
            <li>
              <a className="hover:text-[#0064E6]">بلاگ</a>
            </li>
            <li>
              <a className="hover:text-[#0064E6]">باشگاه مشتریان</a>
            </li>
          </ul>
        </div>

        <div className="p-[15px] w-[260px]">
          <label className="flex items-center bg-gray-100 border border-gray-200 rounded-md px-2 focus-within:border-[#0064E6] transition">
            <input
              className="w-full bg-transparent pr-1 pl-3 py-2 outline-none text-gray-600 text-right"
              value=""
              id="search"
              placeholder="جستجو محصولات"
            />
            <svg
              className="h-[1em] opacity-60 me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>
        </div>

        <div className="flex gap-2 pe-6">
          <div className="">
            <div tabIndex={0} role="button" className="mt-3">
              <div className="w-28">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://www.dastresi.com/images/logo/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full shadow-sm px-2 border-b relative z-20 p-[10px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <nav className="container mx-auto">
          <ul className="flex flex-row gap-7 justify-center px-16 font-medium text-[15px]">
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                کابل - مبدل - رابط
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li><a href="/products/hdmi-cable" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل HDMI</a></li>
                  <li><a href="/products/135" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل پرینتر</a></li>
                  <li><a href="/products/137" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل هارد اکسترنال</a></li>
                  <li><a href="/products/139" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">انواع رابط و تبدیل</a></li>
                  <li><a href="/products/158" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل AUX</a></li>
                  <li><a href="/products/163" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل 2 به 1 صدا</a></li>
                  <li><a href="/products/166" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل اپتیکال</a></li>
                  <li><a href="/products/196" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کابل و فیش OTG</a></li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer focus:outline-none">
                لوازم جانبی موبایل و کامپیوتر
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li>
                    <a href="/products/172" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">ماوس و کیبورد و پدموس</a>
                  </li>
                  <li>
                    <a href="/products/Speaker" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">اسپیکر</a>
                  </li>
                  <li className="relative group">
                    <a href="/products/153" className="flex justify-between items-center px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800 group">
                      تجهیزات ذخیره سازی
                      <span className="ml-1">&#8592;</span>
                    </a>
                    {/* زیرمنو */}
                    
                  </li>
                  <li>
                    <a href="/products/holders" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">هولدر و نگهدارنده</a>
                  </li>
                  <li className="relative group">
                    <a href="/products/Charging-Cable" className="flex justify-between items-center px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800 group">
                      کابل شارژ
                      <span className="ml-1">&#8592;</span>
                    </a>
                    
                  </li>
                  {/* ... می‌توانید مابقی آیتم‌ها را مانند بالا اضافه کنید */}
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                لوازم تولید محتوا
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li><a href="/products/microphone" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">میکروفون</a></li>
                  <li><a href="/products/188" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">رینگ لایت و پایه</a></li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                لوازم شبکه
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li><a href="/products/150" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">مودم - روتر</a></li>
                  <li><a href="/products/151" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">هاب شبکه</a></li>
                  <li><a href="/products/152" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">مودم همراه</a></li>
                  <li><a href="/products/168" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">لوازم جانبی</a></li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                کنسول بازی و لوازم جانبی
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li><a href="/products/178" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کیف</a></li>
                  <li><a href="/products/181" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">کنسول</a></li>
                  <li><a href="/products/171" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">موس و کیبورد</a></li>
                  <li><a href="/products/128" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">دسته بازی</a></li>
                  <li><a href="/products/127" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">هندزفری و هدست</a></li>
                  <li><a href="/products/182" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">شارژر دسته بازی</a></li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                لوازم خانگی و شخصی
                
              </button>
              <div className="absolute right-0 top-full w-72 bg-gray-400 border rounded-b shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition duration-200">
                <ul className="py-2">
                  <li><a href="/products/159" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">انواع گجت های جذاب</a></li>
                  <li>
                    <div className="relative group">
                      <a href="/products/battery" className="flex justify-between items-center px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">
                        باتری و شارژر <span className="ml-1">&#8592;</span>
                      </a>
                      <div className="absolute right-full top-0 w-56 bg-gray-400 border rounded-l shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                        <ul>
                          <li><a href="/products/143" className="block px-5 py-1 hover:bg-gray-100 text-xs">باتری آلکالاین</a></li>
                          <li><a href="/products/144" className="block px-5 py-1 hover:bg-gray-100 text-xs">باتری ساده</a></li>
                          <li><a href="/products/147" className="block px-5 py-1 hover:bg-gray-100 text-xs">باتری شارژی</a></li>
                          <li><a href="/products/148" className="block px-5 py-1 hover:bg-gray-100 text-xs">شارژر باتری</a></li>
                          <li><a href="/products/149" className="block px-5 py-1 hover:bg-gray-100 text-xs">باتری سکه ای</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li><a href="/products/161" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">اندروید باکس و گیرنده دیجیتال</a></li>
                  <li><a href="/products/162" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">آنتن رومیزی</a></li>
                  <li><a href="/products/165" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">مچ بند و ساعت هوشمند</a></li>
                  <li><a href="/products/175" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">محصولات کمبو</a></li>
                  <li><a href="/products/194" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">رابط برق و USB</a></li>
                  <li><a href="/products/195" className="block px-5 py-1 hover:bg-gray-100  text-sm text-shadow-gray-800">اف ام پلیر</a></li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700  hover:bg-gray-400 cursor-pointer">
                برندها
                
              </button>
            </li>
            <li className="relative group  mt-2">
              <a href="/" className="px-4 py-2 text-gray-700  hover:bg-gray-400">خانه</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
