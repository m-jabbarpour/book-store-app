function Navigation({ book }) {
  return (
    <div className="w-full bg-neutral-200 text-xs">
      <div className="container py-4">
        طاقچه / <span> {book.category}</span> / <span>{book.subCategory}</span>{" "}
        / <span>{book.title}</span>
      </div>
    </div>
  );
}

export default Navigation;
