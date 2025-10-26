const Info = () => {
    return ( <>
    <div className="max-w-screen-xl mx-auto hidden md:block p-4 mb-8 bg-white xl:rounded-xl border border-gray-100">
    <h3 className="text-2xl text-center font-bold text-neutral-800 mb-8">چرا دسترسی رو برای خرید انتخاب کنیم؟</h3>
    <div className="flex">
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
            <img className="w-16 mb-2" src="/images/icon2.png" alt="مشاوره تخصصی" />
            <p className="flex-1 text-center font-bold text-gray-700 mb-2">مشاوره تخصصی برای خرید محصول</p>
            <p className="text-center text-sm text-neutral-800 leading-7"> برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو انجام دهید.</p>
        </div>
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
            <img className="w-16 mb-2" src="/images/icon1.png" alt="قیمت مناسب" />
            <p className="flex-1 text-center font-bold text-gray-700 mb-2">قیمت مناسب با بالاترین کیفیت</p>
            <p className="text-center text-sm text-neutral-800 leading-7">گروه دسترسی در تلاش است که  کالای با کیفیت را با مناسب‌ترین قیمت به دست شما برساند.</p>
        </div>
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
            <img className="w-16 mb-2" src="/images/icon3.png" alt="ارسال سریع" />
            <p className="flex-1 text-center font-bold text-gray-700 mb-2">ارسال سریع</p>
            <p className="text-center text-sm text-neutral-800 leading-7">ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می گیرد.</p>
        </div>
        <div className="flex flex-col flex-1 h-full justify-center items-center p-4">
            <img className="w-16 mb-2" src="/images/icon4.png" alt="خرید حضوری" />
            <p className="flex-1 text-center font-bold text-gray-700 mb-2">امکان خرید حضوری</p>
            <p className="text-center text-sm text-neutral-800 leading-7">مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت مراجعه نمایید.</p>
        </div>
    </div>
</div>
    </> );
}
 
export default Info;