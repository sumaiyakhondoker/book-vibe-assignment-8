import PropTypes from 'prop-types'
import { GrLocation } from 'react-icons/gr';
import { HiOutlineDocumentChartBar, HiOutlineUsers } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
const WishlistBook = ({book}) => {
    const {bookId,image,bookName,author,category,tags,rating,totalPages,publisher,yearOfPublishing} = book
    return (
        <div className="p-5 border border-gray-300 rounded-2xl shadow-xl ">
  <div className="flex   flex-col gap-0 lg:gap-7 lg:flex-row items-center">
    
    <img
      src={image}
      className=" max-w-sm " />
   
    <div className='  w-full space-y-3 lg:space-y-4'>
      <h1 className="text-3xl font-bold">{bookName}</h1>
      <p className='text-lg text-gray-700'>By: {author}</p>
      {/* div1 */}
      <div className='flex flex-col gap-3 sm:flex-row  lg:gap-7 lg:items-center'>
        {/* tags */}
        <div className='flex gap-2 '>
          <span className='font-bold'>Tag</span> {tags.map(tag => 
            <div 
            key ={tag}
            className="badge badge-ghost p-3 text-[#23BE0A] font-medium">#{tag}</div>
          )}
          </div>
        {/* year of publishing */}
        <div className='text-gray-600 '>
            <p className='flex gap-2 items-center'><GrLocation size={20}></GrLocation> Year of Publishing: {yearOfPublishing}</p>
        </div>
      </div>

      {/* div2 */}
      <div className='flex gap-7 items-center pb-4 border-b-2 text-gray-500'>
        <div>
            <p className='flex gap-2 items-center'><HiOutlineUsers size={20}></HiOutlineUsers>Publisher: {publisher}</p>
        </div>
        <div>
            <p className='flex gap-2 items-center'><HiOutlineDocumentChartBar size={20}></HiOutlineDocumentChartBar>Page: {totalPages}</p>
        </div>
      </div>

      {/* div3 */}
      <div className='flex justify-evenly lg:justify-start gap-3 pt-4 font-medium'>
      <div className="badge px-4 py-7 text-center lg:text-start lg:p-5 bg-sky-100 text-sky-500">Category: {category}</div>
      <div className="badge px-4 py-7 text-center lg:text-start lg:p-5 bg-orange-100 text-orange-500">Rating: {rating}</div>
      <Link  to={`/book/${bookId}`}><div className="badge px-4  py-7 text-center lg:text-start lg:p-5 bg-[#23BE0A] text-white">View Details</div></Link>
      </div>
     

      
    </div>
  </div>
</div>
    );
};

WishlistBook.propTypes ={
    book: PropTypes.object,
}

export default WishlistBook;