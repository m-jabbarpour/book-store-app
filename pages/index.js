import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CommonLayout from "../Layouts/CommonLayout";
import SwiperLg from "../components/custom/SwiperLg";
import BannerSwiper from "../components/custom/BannerSwiper";
import BookSubCategory from "../components/custom/BookSubCategory";

import { fetchBooks } from "../src/redux/slices/booksSlice";
import { fetchBanners } from "../src/redux/slices/bannersSlice";

export default function Home() {
  const books = useSelector((store) => store.books.value);
  const banners = useSelector((store) => store.banners.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchBanners());
  }, []);

  return (
    <>
      <Head>
        <title>طاقچه | فروشگاه کتاب</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logos/logo.svg" />
      </Head>

      <CommonLayout>
        <SwiperLg />
        <BookSubCategory subCategory="توسعه فردی" books={books} />
        <BannerSwiper category="blog" banners={banners} />
        <BookSubCategory subCategory="خانواده و ازدواج" books={books} />
        <BannerSwiper category="quote" banners={banners} />
        <BookSubCategory subCategory="داستان خارجی" books={books} />
        <BannerSwiper category="instagram" banners={banners} />
        <BookSubCategory subCategory="داستان ایرانی" books={books} />
      </CommonLayout>
    </>
  );
}
