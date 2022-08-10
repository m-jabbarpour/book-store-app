import axios from "axios";
import { useRouter } from "next/router";
import BookDetails from "../../components/custom/BookDetails";
import Navigation from "../../components/custom/Navigation";

import useSWR from "swr";
import BookDescription from "../../components/custom/BookDescription";
import RecommendedBooksByAuthor from "../../components/custom/RecommendedBooksByAuthor";
import RecommendedBooksByPublication from "../../components/custom/RecommendedBooksByPublication";
import RecommendedBooksBySubCategory from "../../components/custom/RecommendedBooksBySubCategory";
import Comments from "../../components/custom/Comments";
import CommonLayout from "../../Layouts/CommonLayout";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function SingleBook() {
  const router = useRouter();
  const { bookId } = router.query;

  const { data, error } = useSWR(`/api/books/${bookId}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <CommonLayout>
      <Navigation book={data} />
      <BookDetails book={data} />
      <BookDescription book={data} />
      <Comments bookTitle={data.title} comments={data.comments} />
      <RecommendedBooksByAuthor currentBook={data} />
      <RecommendedBooksByPublication currentBook={data} />
      <RecommendedBooksBySubCategory currentBook={data} />
    </CommonLayout>
  );
}

export default SingleBook;
