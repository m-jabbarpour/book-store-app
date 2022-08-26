import { Formik } from "formik";
import { useRouter } from "next/router";

import * as yup from "yup";

function SignupForm() {
  const router = useRouter()
  
  const signupSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("نام خود را وارد کنید!")
      .min(3, "نام نمی‌تواند کمتر از 3 حرف باشد!")
      .max(25, "نام ‌نمی‌تواند بیشتر از 25 حرف باشد!"),
    lastName: yup
      .string()
      .required("نام خانوادگی خود را وارد کنید!")
      .min(3, "نام خانوادگی نمی‌تواند کمتر از 3 حرف باشد!")
      .max(25, "نام خانوادگی ‌نمی‌تواند بیشتر از 25 حرف باشد!"),
    email: yup
      .string()
      .email("ایمیل وارد شده صحیح نیست!")
      .required("ایمیل خود را وارد کنید!"),
    password: yup
      .string()
      .required("رمز عبور خود را وارد کنید!")
      .min(5, "رمز عبور باید حداقل دارای 5 کاراکتر باشد!")
      .max(25, "رمز عبور نمی‌تواند بیش از 25 کاراکتر داشته باشد!"),
  });

  const handleSignup = async (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    
    router.push("/finalize-order");
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={handleSignup}
      validationSchema={signupSchema}
    >
      {(handler) => (
        <form
          className="flex flex-col w-[320px] mx-auto bg-neutral-200 p-5 rounded-lg"
          onSubmit={handler.handleSubmit}
        >
          {console.log(handler)}
          <label htmlFor="firstName" className="mb-1">
            نام:
          </label>
          <input
            name="firstName"
            type="text"
            value={handler.values.firstName}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
            className={`focus:outline-none rounded p-2 mb-1 focus:shadow border-2  ${
              handler.errors.firstName ? "border-2 border-red-600" : ""
            }`}
          />
          <span className="text-red-600 font-bold text-[10px] h-[16px] mb-2">
            {handler.errors.firstName}
          </span>
          <label htmlFor="lastName" className="mb-1">
            نام خانوادگی:
          </label>
          <input
            name="lastName"
            type="text"
            value={handler.values.lastName}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
            className={`focus:outline-none rounded p-2 mb-1 focus:shadow border-2  ${
              handler.errors.lastName ? "border-2 border-red-600" : ""
            }`}
          />
          <span className="text-red-600 font-bold text-[10px] h-[16px] mb-2">
            {handler.errors.lastName}
          </span>
          <label htmlFor="email" className="mb-1">
            ایمیل:
          </label>
          <input
            name="email"
            type="email"
            value={handler.values.email}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
            className={`focus:outline-none rounded p-2 mb-1 focus:shadow border-2  ${
              handler.errors.email ? "border-2 border-red-600" : ""
            }`}
          />
          <span className="text-red-600 font-bold text-[10px] h-[16px] mb-2">
            {handler.errors.email}
          </span>
          <label htmlFor="password" className="mb-1">
            رمز عبور:
          </label>
          <input
            name="password"
            type="password"
            value={handler.values.password}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
            className={`focus:outline-none rounded p-2 mb-1 focus:shadow border-2  ${
              handler.errors.password ? "border-2 border-red-600" : ""
            }`}
          />
          <span className="text-red-600 font-bold text-[10px] h-[16px] mb-2">
            {handler.errors.password}
          </span>
          <button
            type="submit"
            className="bg-primary font-bold text-white rounded p-2 cursor-pointer shadow"
          >
            ثبت نام
          </button>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
