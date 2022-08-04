import Image from "next/image";
import React from "react";
import logo from "../../public/logos/logo.svg";
import telegram from "../../public/logos/telegram.svg";
import instagram from "../../public/logos/instagram.svg";
import facebook from "../../public/logos/facebook.svg";
import twitter from "../../public/logos/twitter.svg";
import youtube from "../../public/logos/youtube.svg";
import linkedin from "../../public/logos/linkedin.svg";
import samandehi from "../../public/logos/samandehi.png";
import enamad from "../../public/logos/enamad.webp";

function Footer() {
  return (
    <footer className="bg-neutral-200">
      <div className="container mx-auto px-12 py-4">
        <div className="xl:flex pb-4 border-b-[1px] border-gray-100">
          <div className="w-full xl:w-1/3 flex flex-col justify-around items-center gap-2 text-xs px-8 mx-auto">
            <Image src={logo} layout="fixed" width="48" height="48" />
            <p className="text-center xl:text-justify ">
              طاقچه سایت و اپلیکیشن دانلود کتاب الکترونیکی و دانلود کتاب صوتی
              است. در طاقچه هزاران کتاب، مجله، روزنامه و کتاب گویا را می‌توانید
              دانلود کنید و با موبایل، تبلت و رایانه آن‌ها را بخوانید. در طاقچه
              کتاب‌های روانشناسی، رمان و داستان، کتاب‌های تاریخی، کتاب فلسفی و
              هزاران کتاب رایگان برای دانلود وجود دارد.
            </p>
            <div className="flex justify-center">
              <Image src={samandehi} layout="fixed" width="64" height="64" />
              <Image src={enamad} layout="fixed" width="64" height="64" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center lg:text-right justify-between text-sm">
            <div>
              <h3 className="font-bold leading-[3rem] ">طاقچه</h3>
              <ul className="flex flex-col justify-around">
                <li className="my-2">درباره ما</li>
                <li className="my-2">تماس با ما</li>
                <li className="my-2"> وبلاگ</li>
                <li className="my-2"> سوالات متداول</li>
                <li className="my-2"> فرصت‌های شغلی</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold leading-[3rem]">کتاب‌های پیشنهادی</h3>
              <ul className="flex flex-col justify-around">
                <li className="my-2"> ملت عشق</li>
                <li className="my-2"> ما چگونه ما شدیم؟</li>
                <li className="my-2"> غرب چگونه غرب شد؟</li>
                <li className="my-2"> تسلی‌بخشی‌های فلسفه</li>
                <li className="my-2"> نیمه تاریک وجود</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold leading-[3rem]">
                دسته‌بندی‌های پیشنهادی
              </h3>
              <ul className="flex flex-col justify-around">
                <li className="my-2"> فلسفه و منطق</li>
                <li className="my-2"> سبک زندگی </li>
                <li className="my-2"> داستان و رمان</li>
                <li className="my-2"> علوم انسانی</li>
                <li className="my-2"> زندگی‌نامه و خاطرات</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold leading-[3rem]"> وبلاگ طاقچه</h3>
              <ul className="flex flex-col justify-around">
                <li className="my-2"> رمان جدید </li>
                <li className="my-2"> زندگی‌نامه و آثار سعدی</li>
                <li className="my-2"> کتاب‌های اطلاعات عمومی</li>
                <li className="my-2">معرفی کتاب‌های مشابه ملت عشق</li>
                <li className="my-2"> زندگی‌نامه و اشعار سهراب سپهری</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center py-3">
          <span className="text-[10px] hidden sm:block">
            © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه کتاب الکترونیک طاقچه
            است.
          </span>
          <div className="flex gap-2">
            <Image
              src={facebook}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            <Image
              src={twitter}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            <Image
              src={youtube}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            <Image
              src={telegram}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            <Image
              src={instagram}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            <Image
              src={linkedin}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          </div>
          <span className="sm:hidden text-[10px] text-center">
            © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه کتاب الکترونیک طاقچه
            است.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
