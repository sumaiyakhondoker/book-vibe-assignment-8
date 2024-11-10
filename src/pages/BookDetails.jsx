import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { getStoredReadBooks, saveReadBooks, setWishedBooks } from "../utils";


const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  // console.log(books, idInt);
  const book = books.find((book) => book.bookId === idInt);
  // console.log(book);
  const {
    rating,
    image,
    bookName,
    author,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadBtn = ()=>{
    // console.log('hello iam read btn');
    saveReadBooks(book)
    
    // console.log(getStoredReadBooks());
  }
  const handleWishlistBtn = ()=>{
    // toast.success('Book added to wishlist successfully!')
    // toast.error('You have already read this!')
    setWishedBooks(book)
  }
  const navigation = useNavigation()
  if(navigation.state === 'loading') return <Loader></Loader>
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 bg-base-100 my-4 lg:mt-8   lg:mb-10 " >
      <figure className="flex justify-center items-center flex-1 border rounded-2xl">
        <img className=""
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="flex-1 p-4">
        <div className="pb-4 border-b-2">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-2">{bookName}</h2>
        <p className="text-xl font-medium">By: {author}</p>
        </div>
        <p className="text-xl font-medium py-3">{category}</p>
        <div className="pt-4 border-y-2 ">
            <p className="text-gray-600"><span className="font-bold text-black">Review: </span>{review}</p>

          <div className="flex gap-3 py-2 items-center">
          <span className="text-black font-bold">Tags: </span><div className='flex gap-2 my-4'>
          {tags.map(tag => 
            <a href="#" 
            key ={tag}
            className="badge badge-ghost p-3 text-[#23BE0A] text-xs lg:text-base">#{tag}</a>
          )}
          </div>
          </div>
        </div>

        <div className="flex gap-6 py-6">
            <div className="text-gray-600 space-y-3">
                <p>Number of Pages: </p>
                <p>Publisher: </p>
                <p>Year of Publishing: </p>
                <p >Rating: </p>
            </div>
            <div className="font-semibold text-black space-y-3">
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
            
        </div>
        <div className="card-actions justify-start">
          <button onClick={handleReadBtn} className="btn lg:px-5 hover:bg-[#23BE0A] hover:text-white text-black border-2 border-gray-300  mr-2">Read</button>
          <button onClick={handleWishlistBtn} className="btn lg:px-5 bg-[#59C6D2] text-white hover:bg-white hover:text-black hover:border-[#59C6D2]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
