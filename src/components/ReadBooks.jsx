import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const books = useLoaderData()
    console.log(books);
    return (
    <div className="pt-6 pb-10 space-y-5">
        {
            books.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
        }


    </div>
    );
};

export default ReadBooks;