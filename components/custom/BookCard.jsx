import Image from "next/image";
import Link from "next/link";

function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="group w-[92px] sm:w-[120px] lg:w-[150px] cursor-pointer ">
        <div className="relative w-[92px] h-[138px] sm:w-[120px] sm:h-[180px] lg:w-[150px] lg:h-[225px] mb-2 shadow-lg group-hover:shadow-[0_6px_6px_0px_#00000052] transition-all duration-300 rounded overflow-hidden">
          {" "}
          <Image
            src={book.image}
            layout="fill"
            title={book.title}
            alt={book.title}
          />
        </div>

        <h5 className="text-xs lg:text-base text-center truncate group-hover:text-primary group-hover:font-bold transition-all duration-300">
          {book.title}
        </h5>
        <h6 className="text-xs lg:text-base text-center text-gray-500">
          {book.authors.join("، ")}
        </h6>
      </div>
    </Link>
  );
}

export default BookCard;
