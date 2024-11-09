import PropTypes from 'prop-types'
import { BiRightArrowCircle } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
const Author = ({author}) => {
    const {name,image,bio,books,featured_content} = author
    
    return (
        <div className="flex flex-col  p-6 dark:bg-gray-50 dark:text-gray-800 border shadow-md rounded-lg">
       
        <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
       
        <div className='mt-3'>
            <h2 className="text-xl font-semibold text-center">{name}</h2>
            {/* <span className="block pb-2 text-sm dark:text-gray-600">CTO of Company Inc.</span> */}
            <p>{bio}</p>
            <div className='mt-3'>
                <ul>
                    <h3 className='text-lg font-semibold'>Books:</h3>
                    {books.map(b => <li className='flex gap-2 items-center' key={b.title}><BiRightArrowCircle className='text-xl'></BiRightArrowCircle>{b.title}</li>)}
                </ul>
            </div>
            <div>
            <h3 className='text-lg font-semibold mt-2'>Featured Content:</h3>
            {
                featured_content.map(item => <a href={item.link} key={item.type} target='_blank' className='flex gap-2 items-center hover:underline' ><GoDotFill></GoDotFill>{item.type}</a>)
            }
            

            </div>
        </div>
    </div>
    );
};

Author.propTypes ={
    author: PropTypes.object,
}

export default Author;