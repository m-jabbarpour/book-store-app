import { CheckIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../src/redux/slices/cartSlice";

function PaymentSuccess() {
  const router = useRouter();
  const dispatch = useDispatch();
  const goToHomePage = () => {
    router.push("/");
    dispatch(emptyCart());
  };
  return (
    <div className="w-100 h-[100vh] flex flex-col justify-center items-center">
      <div className="w-16 h-16 flex justify-center items-center bg-green-500 rounded-full">
        <CheckIcon className="w-14 text-white" />
      </div>
      <h2 className="font-bold text-lg mt-2">پرداخت با موفقیت انجام شد.</h2>
      <h3 className="mt-4 cursor-pointer" onClick={goToHomePage}>
        بازگشت به سایت
      </h3>
    </div>
  );
}

export default PaymentSuccess;
