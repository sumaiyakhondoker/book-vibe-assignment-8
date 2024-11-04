import bannerBookImg from '../assets/images/bannerbook.png'
const Banner = () => {
    return (
        <div className='p-24 flex justify-between items-center bg-slate-100 rounded-3xl mt-7'>
            <div className='max-w-xl'>
                <h1 className='text-5xl font-bold leading-normal mb-8'>Books to freshen <br /> up your bookshelf</h1>
                <button className='btn lg:px-5 bg-[#23BE0A] text-white text-lg font-bold'>View The List</button>
            </div>
            <div>
                <img src={bannerBookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
