function QuantitiesManagement({ booksSummary }) {
  return (
    <div className="container mx-auto px-12 py-4">
      <div className="flex font-bold pb-2 border-b-2">
        <span className="w-3/5">عنوان کتاب</span>
        <span className="w-1/5">قیمت</span>
        <span className="w-1/5">موجودی</span>
      </div>
      {booksSummary.map((book) => (
        <div className="flex pb-2 border-b-2" key={book.id}>
          <span className="w-3/5">{book.title}</span>
          <span className="w-1/5">
            {book.price.toLocaleString("fa-IR")} تومان
          </span>
          <span className="w-1/5">{book.quantity.toLocaleString("fa-IR")}</span>
        </div>
      ))}
    </div>
  );
}

export default QuantitiesManagement;
