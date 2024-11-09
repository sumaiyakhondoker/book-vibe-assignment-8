import { useEffect, useState } from "react";
import { getStoredWishedBooks } from "../utils";
import WishlistBook from "./WishlistBook";

const WishlistBooks = () => {
    const [wishedBooks, setWishedBooks] = useState([])
    useEffect(()=>{
        const storedWishedBooks = getStoredWishedBooks()
        setWishedBooks(storedWishedBooks)
    },[setWishedBooks])
    // console.log(readBooks);
    return (
    <div className="pt-6 pb-10 space-y-5">
        {
            wishedBooks.map(book => <WishlistBook key={book.bookId} book={book}></WishlistBook>)
        }


    </div>
    )
};

export default WishlistBooks;