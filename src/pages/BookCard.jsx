import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const BookCard = ({book}) => {
    const {bookId,image,bookName,author,category,tags,rating} = book
    return (
        <Link 
        to= {`/book/${bookId}`}
        className=" group border rounded-2xl p-5  dark:bg-gray-50"
      >
        
        <div className="flex justify-center ">
        <img
          role="presentation"
          className="object-cover  rounded h-56 dark:bg-gray-500"
          src={image}
        />
        </div>
        
       
        <div className="space-y-2">
          <div className='flex gap-2 my-4'>
          {tags.map(tag => 
            <div 
            key ={tag}
            className="badge badge-ghost p-3 text-[#23BE0A]">{tag}</div>
          )}
          </div>
          <div className='pb-3 border-b-2 border-dashed border-gray-300 space-y-2'>
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {bookName}
          </h3>
          <p className="text-base font-medium text-gray-600">
            By: {author}
          </p>
          </div>
          <div className='flex justify-between pt-4'>
            <p>{category}</p>
            <p className="flex gap-2 items-center">{rating} <CiStar className="text-xl"></CiStar></p>
          </div>
        </div>
      </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object,
}

export default BookCard;