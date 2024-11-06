import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0)
  // console.log(index);
  return (
    <div className="mt-3 mb-6 lg:mt-6 lg:mb-12">
      <div className="p-7 flex justify-center bg-slate-100 rounded-2xl">
        <h3 className="text-3xl font-bold">Books</h3>
      </div>

      {/* dropdown */}
      <div className="flex justify-center my-6">
        <details className="dropdown ">
          <summary className="btn m-1 lg:px-5 bg-[#23BE0A] text-white hover:text-black">
            Sort By <IoIosArrowDown size={20}></IoIosArrowDown>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li className="bg-white text-black transition hover:bg-[#23BE0A] hover:text-white cursor-pointer">
            Rating
            </li>
            <li className="bg-white text-black transition hover:bg-[#23BE0A] hover:text-white cursor-pointer">
            Number of pages
            </li>
            <li className="bg-white text-black transition hover:bg-[#23BE0A] hover:text-white cursor-pointer">
            Publisher year
            </li>
          </ul>
        </details>
      </div>

    {/* tabs */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
         to=''
        onClick={()=> setTabIndex(0)}
          className={`flex  items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg text-gray-600' : 'border-b text-gray-400'} dark:border-gray-600 dark:text-gray-900`}
        >
          
          <span>Read books</span>
          
        </Link>
        
        <Link 
        to='wishlistbooks'
          
          onClick={()=> setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg text-gray-600' : 'border-b text-gray-400'} dark:border-gray-600 dark:text-gray-900`}
        >
          
          <span>Wishlist Books</span>
        </Link>

        
       
        
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
