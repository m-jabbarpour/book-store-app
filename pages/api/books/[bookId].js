import booksDataBase from "../../../src/database/db";

export default function handler(req, res) {
  const { bookId } = req.query;
  const book = booksDataBase.find(book => book.id === bookId)
   if (!book) {
     res.status(404).json({});
     return;
  }
  res.status(200).json(book);
}
