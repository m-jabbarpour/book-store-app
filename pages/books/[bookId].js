import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";

import CommonLayout from "../../Layouts/CommonLayout";
import BookDetails from "../../components/custom/BookDetails";
import Navigation from "../../components/custom/Navigation";
import BookDescription from "../../components/custom/BookDescription";
import Comments from "../../components/custom/Comments";
import RecommendedBooks from "../../components/custom/RecommendedBooks";

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
      <RecommendedBooks currentBook={data} property="authors" />
      <RecommendedBooks currentBook={data} property="publications" />
      <RecommendedBooks currentBook={data} property="subCategory" />
    </CommonLayout>
  );
}

export default SingleBook;
