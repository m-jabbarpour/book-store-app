function BookDescription({ book }) {
  return (
    <section className="container py-8">
      <div>
        <h2 className="text-sm sm:text-xl font-bold mb-4">
          معرفی کتاب {book.title}
        </h2>
        <p className="text-sm sm:text-base leading-6 sm:leading-8 text-justify text-gray-600 mb-4">
          {book.introduction}
        </p>
      </div>
      <div>
        <h2 className="text-sm sm:text-xl font-bold mb-4">
          بخش‌هایی از کتاب {book.title}
        </h2>
        <p className="text-sm sm:text-base leading-6 sm:leading-8 text-justify text-gray-600 mb-4">
          {book.sample}
        </p>
      </div>
    </section>
  );
}

export default BookDescription;
