import booksDataBase from "../../../src/database/db";

export default function handler(req, res) {
  res.status(200).json(booksDataBase);
}
