import Title from "./Title";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

function OrderInfo() {
  const router = useRouter();
  const phoneRegex = /09(1[0-9]|0[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

  const orderInfoSchema = yup.object().shape({
    phone: yup
      .string()
      .required("شماره همراه خود را وارد کنید!")
      .matches(phoneRegex, "شماره وارد شده صحیح نیست!"),
    address: yup
      .string()
      .required("نشانی خود را وارد کنید!")
      .min(10, "نشانی خود را کامل کنید!"),
  });

  const handleOrderInfo = (values) => {
    router.push("/payment");
  };

  return (
    <div className="container pt-4 pb-6 sm:pt-8 sm:pb-12">
      <Title title="نهایی کردن سبد خرید" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          date: "",
        }}
        onSubmit={handleOrderInfo}
        validationSchema={orderInfoSchema}
      >
        {(handler) => (
          <form
            className="flex flex-col max-w-[320px] mx-auto sm:grid sm:grid-cols-2 sm:gap-4 sm:max-w-[100%] lg:max-w-[672px]"
            onSubmit={handler.handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1">
                نام:
              </label>
              <input
                name="firstName"
                type="text"
                className="focus:outline-none rounded p-2 mb-4 focus:shadow border-2"
                value={handler.values.firstName}
                onChange={handler.handleChange}
                onBlur={handler.handleBlur}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1">
                نام خانوادگی:
              </label>
              <input
                name="lastName"
                type="text"
                className="focus:outline-none rounded p-2 mb-4 focus:shadow border-2"
                value={handler.values.lastName}
                onChange={handler.handleChange}
                onBlur={handler.handleBlur}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1">
                شماره همراه:
              </label>
              <input
                name="phone"
                type="tel"
                className="focus:outline-none rounded p-2 mb-1 focus:shadow border-2"
                value={handler.values.phone}
                onChange={handler.handleChange}
                onBlur={handler.handleBlur}
              />
              <span className="text-red-600 font-bold text-[10px] h-[16px] mb-2">
                {handler.errors.phone}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="mb-1">
                تاریخ تحویل:
              </label>
              <input
                name="date"
                type="date"
                className="focus:outline-none rounded p-2 mb-4 focus:shadow border-2"
                value={handler.values.date}
                onChange={handler.handleChange}
                onBlur={handler.handleBlur}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="address" className="mb-1">
                نشانی:
              </label>
              <textarea
                name="address"
                className="focus:outline-none rounded p-2 mb-1 focus:shadow border-2"
                value={handler.values.address}
                onChange={handler.handleChange}
                onBlur={handler.handleBlur}
              />
              <span className="text-red-600 font-bold text-[10px] h-[16px] mb-4">
                {handler.errors.address}
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-center text-white font-bold bg-primary rounded-lg py-2 cursor-pointer hover:shadow col-span-2 sm:max-w-[320px] mx-auto"
            >
              پرداخت
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default OrderInfo;
