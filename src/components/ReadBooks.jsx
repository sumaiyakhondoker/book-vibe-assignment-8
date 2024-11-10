// import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../utils";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedReadBooks = getStoredReadBooks();
    setReadBooks(storedReadBooks);
  }, [setReadBooks]);

  // ratings in descending order
// for(const book of readBooks){
//         const id = book.bookId
//         const rating = book.rating
//         console.log(id, rating);
        
//     }
    


  const ratings = readBooks.map((book) => book.rating);

  const remainingRatings = ratings.slice(1,ratings.length)
//   console.log(remainingRatings);
let minRating = ratings[0];
for(const rating of remainingRatings){
    if(rating < minRating){
        minRating = rating
    }
}

console.log(minRating);




  return (
    <div className="pt-6 pb-10 space-y-5">
      {readBooks.map((book) => (
        <ReadBook key={book.bookId} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
