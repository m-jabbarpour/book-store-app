import React from "react";
import { useDispatch } from "react-redux";
import { orders } from "../../src/database/orders";
import { showOrderDetailsModal } from "../../src/redux/slices/orderDetailsModalSlice";
import { setSelectedOrder } from "../../src/redux/slices/selectedOrderSlice";
import OrderDetailsModal from "./OrderDetailsModal";

function OrdersManagement() {
  const dispatch = useDispatch();

  const showOrder = (order) => {
    dispatch(showOrderDetailsModal(true));
    dispatch(setSelectedOrder(order));
  };

  return (
    <>
      <div className="container mx-auto px-12 py-4">
        <div className="flex pb-2 border-b-2 font-bold">
          <span className="w-1/4">نام کاربر</span>
          <span className="w-1/4">مجموع مبلغ</span>
          <span className="w-1/4">زمان ثبت سفارش</span>
          <span className="w-1/4"></span>
        </div>
        {orders.map((order) => (
          <div className="flex pb-2 border-b-2" key={order.id}>
            <span className="w-1/4">
              {order.firstName} {order.lastName}
            </span>
            <span className="w-1/4">
              {order.totalPrice.toLocaleString("fa-IR")} تومان
            </span>
            <span className="w-1/4">{order.orderDate}</span>
            <span
              className="w-1/4 cursor-pointer hover:text-[#28C5CC]"
              onClick={() => showOrder(order)}
            >
              بررسی سفارش
            </span>
          </div>
        ))}
      </div>
      <OrderDetailsModal />
    </>
  );
}

export default OrdersManagement;
