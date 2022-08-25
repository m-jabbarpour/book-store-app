import { XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function PaymentFail() {
  const router = useRouter();

  return (
    <div className="w-100 h-[100vh] flex flex-col justify-center items-center">
      <div className="w-16 h-16 flex justify-center items-center bg-red-500 rounded-full">
        <XIcon className="w-14 text-white" />
      </div>
      <h2 className="font-bold text-lg mt-2">پرداخت ناموفق بود!</h2>
      <h3
        className="mt-4 cursor-pointer"
        onClick={() => router.push("/payment")}
      >
        پرداخت مجدد
      </h3>
      <h3 className="mt-4 cursor-pointer" onClick={() => router.push("/")}>
        بازگشت به سایت
      </h3>
    </div>
  );
}

export default PaymentFail;
