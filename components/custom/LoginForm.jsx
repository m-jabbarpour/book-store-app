import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { Formik } from "formik";
import * as yup from "yup";

function LoginForm() {
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies("token");

  const loginShema = yup.object().shape({
    email: yup
      .string()
      .email("ایمیل وارد شده صحیح نیست!")
      .required("ایمیل را وارد کنید!"),
    password: yup.string().required("رمز عبور را وارد کنید!"),
  });

  const handleLogin = async (values) => {
    const user = { email: values.email, password: values.password };
    axios
      .post("http://localhost:3000/api/local-auth/login", user)
      .then((res) => {
        setCookie("token", res.data.token, { maxAge: 24 * 60 * 60 });
        router.push("/finalize-order");
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={loginShema}
    >
      {(handler) => (
        <form
          className="flex flex-col w-[320px] mx-auto bg-neutral-200 p-5 rounded-lg"
          onSubmit={handler.handleSubmit}
        >
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
          <span className="text-red-600 font-bold text-[10px] h-[16px] mb-4">
            {handler.errors.password}
          </span>
          <button
            type="submit"
            className="bg-primary font-bold text-white rounded p-2 cursor-pointer shadow"
          >
            ورود
          </button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
