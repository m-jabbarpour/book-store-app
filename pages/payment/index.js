import { useRouter } from "next/router";

function Payment() {
  const router = useRouter();
  return (
    <div className="h-[100vh] w-100 flex justify-center items-center">
      <div className="flex gap-3">
        <button
          className="w-[140px] bg-green-500 hover:bg-green-600 rounded text-white font-bold px-4 py-2"
          onClick={() => router.push("/payment/success")}
        >
          پرداخت موفق
        </button>
        <button
          className="w-[140px] bg-red-500 hover:bg-red-600 rounded text-white font-bold px-4 py-2"
          onClick={() => router.push("/payment/fail")}
        >
          پرداخت ناموفق
        </button>
      </div>
    </div>
  );
}

export default Payment;
