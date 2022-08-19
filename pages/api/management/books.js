import booksDataBase from "../../../src/database/db";

const selectProps = (...props) => {
  return function (obj) {
    const newObj = {};
    props.forEach((prop) => {
      newObj[prop] = obj[prop];
    });
    return newObj;
  };
};

const requiredBookDetails = booksDataBase.map(
  selectProps("id", "title", "category", "subCategory", "price", "quantity", "image")
);

export default function handler(req, res) {
  res.status(200).json(requiredBookDetails);
}
