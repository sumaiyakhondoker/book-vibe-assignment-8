import { useLoaderData, useNavigation } from "react-router-dom";
import BookCard from "../pages/BookCard";
// import Loader from "./Loader";

const Books = () => {
  const books = useLoaderData()
  // console.log(booksData);
  // const navigation = useNavigation()
  // if(navigation.state === 'loading') return <Loader></Loader>
  return (
    <div className=" my-10 lg:mt-16 lg:mb-24">
      <h2 className="text-4xl font-bold text-center mb-5">Books</h2>

      {/*lower part  */}
      
        <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
          
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {
            books.map(book => <BookCard key={book.bookId} book ={book}></BookCard>)
           }
            
          </div>
       
        </div>
      
    </div>
  );
};

export default Books;
