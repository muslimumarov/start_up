import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="container">
        <h1 className="text-[24px] sm-[40px] text-center mb-[16px] sm:mb-[24px] mt-[72px] sm:mt-[126px]">
          {" "}
          Biz bilan kasb va hunarni masofadan o&#39;rganing!
        </h1>
        <p className="text-[14px] sm-[24px] text-center mb-[32px]">
          O‘z mahoratingizni oshiring va orzuingizdagi kasbni biz bilan
          egallang!
        </p>
        <div className="flex items-center justify-center mb-[40px] sm:mb-[72px]">
          <a href="/ro'yhat" className="  ">
            <button className="rounded-[8.9px] bg-[#19A6F5] text-[18px] text-white py-[20px] px-[56px]">
              Ro&#39;yhatdan o&#39;tish
            </button>
          </a>
        </div>
        <ul className="grid items-center gap-3 mb-[80px] md:mb-[100px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <li className="max-w-[288px] lg:max-w-[344px] mb-[24px] p-[24px] sm:mb-0 px-[20px] text-white mx-auto w-full bg-customOrange rounded-[10px]">
            <span className="block text-center text-[30px]  ">1500+</span>
            <span className="text-[13px] block md:text-[11px] lg:text-[13px]   text-center ">
              Ro’yxatdan o’tgan o’quvchilar soni
            </span>
          </li>
          <li className="max-w-[288px] lg:max-w-[344px] mb-[24px] p-[24px] sm:mb-0 px-[20px] text-white mx-auto w-full bg-customOrange rounded-[10px]">
            <span className="block text-center text-[30px] md:text-[33px]">
              1300+
            </span>
            <span className="text-[13px] block  text-center">
              Kurs qatnashuvchilari soni
            </span>
          </li>
          <li className="max-w-[288px] lg:max-w-[344px]  px-[20px] p-[24px] mx-auto w-full text-white bg-customOrange rounded-[10px]">
            <span className="block text-center  text-[30px] md:text-[33px]">
              100+
            </span>
            <span className="text-[13px] text-center block mx-auto">
              O’quv markazlari soni
            </span>
          </li>
        </ul>
      </section>
      <section className="mb-[80px]">
        <h2 className="text-[24px] lg:text-[36px] mb-[24px] lg:mb-[37px] text-center">
          Sizga kerakli barcha kurslar shu yerda
        </h2>

        <div className="link">
          <a href="/kurs">Barcha kurslar</a>
          <a href="/til">Xorijiy tillar</a>
          <a href="/dastur">IT va dasturlash</a>
          <a href="/grafika">Kompyuter grafikasi</a>
          <a href="/moliya">Moliya va biznes</a>
          <Outlet />
        </div>
      </section>
    </>
  );
}
