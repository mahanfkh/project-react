import massageImg from "/images/massage.jpg";
import handsfreeImg from "/images/handsfree.jpg";
import chargerWallImg from "/images/charger wall.jpg";
import powerbankImg from "/images/powerbank.jpg";
import powerbankNImg from "/images/powerbank n.jpg";

const Sale = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-white/50">
        <div className="" id="yw1">
          <div className="">
            <div className="px-1 pb-4 md:px-10 md:pb-12 xl:mx-4 xl:rounded-xl mb-8">
              <div className="py-5">
                <div className="flex justify-center items-center md:justify-end">
                  <div className="flex items-center gap-2 font-bold text-2xl md:text-4xl flex-row-reverse">
                    <svg
                      className="w-7 h-7 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="7"
                        cy="7"
                        r="2.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="17"
                        cy="17"
                        r="2.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-gray-700 text-right">
                      تخفیف‌های روزانه دسترسی
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row md:gap-10 xl:gap-6 ">
                <div className="flex flex-col justify-between w-full lg:w-auto space-y-6">
                  <a className="lg:hidden" href="/product/Powerology-SM011">
                    <div className="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-gray-200 hover:shadow-lg hover:z-50 gap-2">
                      <div className="relative">
                        <img
                          className="w-40 mx-auto rounded-r-xl"
                          alt="ماساژور پاورولوژی"
                          src={massageImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between gap-2 p-3">
                        <h3 className="overflow-hidden font-medium text-sm text-neutral-800 flex-1 leading-7">
                          ماساژور ULTRA-MINI پاورولوژی مدل Powerology SM011{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              3,650,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              255,000 تومان تخفیف
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              3,395,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="lg:hidden" href="/product/Mcdodo-0210">
                    <div className="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-gray-200 hover:shadow-lg hover:z-50 gap-2">
                      <div className="relative">
                        <img
                          className="w-40 mx-auto rounded-r-xl"
                          alt="هندزفری بلوتوثی مک دودو"
                          src={handsfreeImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between gap-2 p-3">
                        <h3 className="overflow-hidden font-medium text-sm text-neutral-800 flex-1 leading-7">
                          هندزفری بلوتوثی دورگردنی مک دودو مدل Mcdodo HP-0210{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              2,190,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              300,000 تومان تخفیف
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              1,890,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="" href="/product/Anker-A2698">
                    <div className="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-gray-200 hover:shadow-lg hover:z-50 gap-2">
                      <div className="relative">
                        <img
                          className="w-40 mx-auto rounded-r-xl"
                          alt="شارژر دیواری انکر"
                          src={chargerWallImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between gap-2 p-3">
                        <h3 className="overflow-hidden font-medium text-sm text-neutral-800 flex-1 leading-7">
                          شارژر دیواری 30 واتی Zolo انکر مدل Anker A2698{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              1,100,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              200,000 تومان تخفیف
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              900,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="" href="/product/Mcdodo-4220">
                    <div className="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-gray-200 hover:shadow-lg hover:z-50 gap-2">
                      <div className="relative">
                        <img
                          className="w-40 mx-auto rounded-r-xl"
                          alt="پاوربانک مک دودو"
                          src={powerbankImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between gap-2 p-3">
                        <h3 className="overflow-hidden font-medium text-sm text-neutral-800 flex-1 leading-7">
                          پاوربانک 10000 میلی آمپر 22.5 واتی مک دودو مدل Mcdodo
                          MC-4220{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              1,597,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              200,000 تومان تخفیف
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              1,397,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="" href="/product/Powerology-Ppbcha34">
                    <div className="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-gray-200 hover:shadow-lg hover:z-50 gap-2">
                      <div className="relative">
                        <img
                          className="w-40 mx-auto rounded-r-xl"
                          alt="پاوربانک پاورولوژی"
                          src={powerbankNImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between gap-2 p-3">
                        <h3 className="overflow-hidden font-medium text-sm text-neutral-800 flex-1 leading-7">
                          پاوربانک 10000 میلی آمپری 20 واتی وایرلس شارژ مگ سیف
                          پاورولوژی مدل Powerology Ppbcha34{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              2,175,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              200,000 تومان تخفیف
                            </span>
                          </div>

                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              1,975,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" flex gap-3">
                  <a href="/product/Powerology-SM011">
                    <div className="shadow  rounded-xl flex h-full flex-col bg-white border-l border-b border-gray-200 p-4 ml-6 hover:shadow-lg hover:z-50 ">
                      <div className="relative">
                        <img
                          className="w-48 md:w-auto mx-auto"
                          alt="ماساژور پاورولوژی"
                          src={massageImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1">
                        <h3 className="font-medium text-md leading-none text-neutral-800 flex-1 my-5 ">
                          ماساژور ULTRA-MINI پاورولوژی مدل Powerology SM011{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              3,650,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              255,000 تومان تخفیف
                            </span>
                          </div>
                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              3,395,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="/product/Mcdodo-0210">
                    <div className="shadow  lg:flex h-full rounded-xl flex flex-col bg-white border-l border-b border-gray-200 p-4 md:ml-6 hover:shadow-lg hover:z-50">
                      <div className="relative">
                        <img
                          className="w-48 md:w-auto mx-auto"
                          alt="هندزفری بلوتوثی مک دودو"
                          src={handsfreeImg}
                        />
                      </div>

                      <div className="flex flex-col flex-1">
                        <h3 className="font-medium text-md leading-none text-neutral-800 flex-1 my-5 ">
                          هندزفری بلوتوثی دورگردنی مک دودو مدل Mcdodo HP-0210{" "}
                        </h3>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-2 justify-between">
                            <span className="font-bold text-neutral-400 text-base line-through">
                              2,190,000{" "}
                            </span>
                            <span className="text-emerald-600 rounded-xl font-medium text-sm">
                              300,000 تومان تخفیف
                            </span>
                          </div>
                          <div className="flex flex-row items-center justify-end gap-1">
                            <span className="text-emerald-600 font-bold text-xl">
                              1,890,000{" "}
                            </span>
                            <span className="text-neutral-600 text-xs">
                              تومان{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
