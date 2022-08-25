import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartIcon() {
  const addedBooks = useSelector((store) => store.cart.addedBooks);
  return (
    <Link href="/cart">
      <div className="cursor-pointer">
        <ShoppingBagIcon className="w-6 relative" />
        {addedBooks.length > 0 ? (
          <div className="absolute top-6 w-4 h-4 flex justify-center items-center rounded-full bg-primary text-white font-bold text-xs z-10">
            <span>{addedBooks.length}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}

export default CartIcon;
