import { useLoaderData } from 'react-router-dom';
import PageToReadBarchart from './PageToReadBarchart';

const PagesToRead = () => {
    const books = useLoaderData()
    console.log(books);
 

      
    return (
        <div>
            {
                books.map(book => <PageToReadBarchart key={book.bookId} book={book}></PageToReadBarchart>)
            }
        </div>
    );
};

export default PagesToRead;