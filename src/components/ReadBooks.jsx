// import { useLoaderData } from "react-router-dom";
import ReadBook from "./ReadBook";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../utils";

const ReadBooks = () => {
    // const books = useLoaderData()
    // console.log(books);
    const [readBooks, setReadBooks] = useState([])
    useEffect(()=>{
        const storedReadBooks = getStoredReadBooks()
        setReadBooks(storedReadBooks)
    },[setReadBooks])
    // console.log(readBooks);
    return (
    <div className="pt-6 pb-10 space-y-5">
        {
            readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
        }


    </div>
    );
};

export default ReadBooks;