import { useEffect, useMemo, useState } from "react";
import imgCable from "/images/cable.png";
import imgAdaptor from "/images/adaptor.png";
import imgPowerbank from "/images/powerbank.png";
import imgHandsfree from "/images/handsfree head.png";
import imgHolder from "/images/Holder Negahdarande.png";
import imgMobadel from "/images/mobadel o rabet.png";
import imgBattery from "/images/battery.png";
import imgGaming from "/images/gaming.png";

const Category = () => {
  const items = useMemo(
    () => [
      { href: "/products/Charging-Cable", src: imgCable, alt: "کابل شارژ" },
      { href: "/products/Charger", src: imgAdaptor, alt: "آداپتور و شارژر" },
      {
        href: "/products/PowerBank",
        src: imgPowerbank,
        alt: "پاوربانک و جامپ استارتر",
      },
      {
        href: "/products/headset",
        src: imgHandsfree,
        alt: "هندزفری و هدست، میکروفون",
      },
      { href: "/products/holders", src: imgHolder, alt: "هولدر و نگهدارنده" },
      { href: "/products/132", src: imgMobadel, alt: "کابل - مبدل - رابط " },
      { href: "/products/133", src: imgBattery, alt: "باتری" },
      {
        href: "/products/134",
        src: imgGaming,
        alt: "کنسول بازی و لوازم جانبی",
      },
    ],
    []
  );

  const pageSize = 6;
  const normalizedItems = useMemo(() => {
    const remainder = items.length % pageSize;
    if (remainder === 0) return items;
    return [...items, ...items.slice(0, pageSize - remainder)];
  }, [items]);
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < normalizedItems.length; i += pageSize) {
      chunks.push(normalizedItems.slice(i, i + pageSize));
    }
    return chunks;
  }, [normalizedItems]);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setPage((p) => (p + 1) % pages.length);
  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
  useEffect(() => {
    if (pages.length <= 1 || paused) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [pages.length, paused]);

  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-8 xl:rounded-xl bg-white/50">
      <div className="xl:mx-4">
        <h3 className="text-2xl text-center font-bold text-neutral-800 mb-4">
          دسته‌بندی‌های منتخب
        </h3>
        <div className="portlet" id="yw2">
          <div className="portlet-content">
            <div className="hidden md:block">
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    width: `${pages.length * 100}%`,
                    transform: `translateX(-${page * (100 / pages.length)}%)`,
                  }}
                >
                  {pages.map((chunk, chunkIdx) => (
                    <div
                      key={chunkIdx}
                      className="grid grid-cols-6 gap-5 items-center text-center"
                      style={{ width: `${100 / pages.length}%` }}
                    >
                      {chunk.map((it, idx) => (
                        <a
                          key={`${chunkIdx}-${idx}`}
                          href={it.href}
                          className="item"
                        >
                          <div className="flex flex-col rounded-xl">
                            <img src={it.src} alt={it.alt} />
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="قبلی"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="بعدی"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-row md:hidden items-center text-center">
              <a
                href="/products/Charging-Cable"
                className="flex flex-col justify-center items-center w-full"
              >
                <img className="" src={imgCable} alt="کابل شارژ" />
              </a>
              <a
                href="/products/Charger"
                className="flex flex-col justify-center items-center w-full"
              >
                <img className="" src={imgAdaptor} alt="آداپتور و شارژر" />
              </a>
              <a
                href="/products/PowerBank"
                className="flex flex-col justify-center items-center w-full"
              >
                <img
                  className=""
                  src={imgPowerbank}
                  alt="پاوربانک و جامپ استارتر"
                />
              </a>
              <a
                href="/products/headset"
                className="flex flex-col justify-center items-center w-full"
              >
                <img
                  className=""
                  src={imgHandsfree}
                  alt="هندزفری و هدست، میکروفون"
                />
              </a>
              <a
                href="/products/holders"
                className="flex flex-col justify-center items-center w-full"
              >
                <img className="" src={imgHolder} alt="هولدر و نگهدارنده" />
              </a>
              <a
                href="/products/132"
                className="flex flex-col justify-center items-center w-full"
              >
                <img className="" src={imgMobadel} alt="کابل - مبدل - رابط " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
