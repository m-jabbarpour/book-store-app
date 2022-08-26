import React, { useEffect } from "react";
import BooksManagement from "../../components/custom/BooksManagement";
import ManagementHeader from "../../components/custom/ManagementHeader";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksSummary } from "../../src/redux/slices/booksSummarySlice";
import OrdersManagement from "../../components/custom/OrdersManagement";

function Management() {
  const dispatch = useDispatch();
  const booksSummary = useSelector((store) => store.booksSummary.value);
  const managementMenu = useSelector((store) => store.managementMenu);

  useEffect(() => {
    dispatch(fetchBooksSummary());
  }, []);

  return (
    <>
      <ManagementHeader />
      {managementMenu.option === "books" ? (
        <BooksManagement booksSummary={booksSummary} />
      ) : (
        <OrdersManagement />
      )}
    </>
  );
}

export default Management;
