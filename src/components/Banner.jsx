import bannerBookImg from '../assets/images/bannerbook.png'
const Banner = () => {
    return (
        <div className='px-5 py-8 lg:px-24 lg:py-12 flex flex-col gap-10 lg:gap-0 lg:flex-row sm:justify-between items-center bg-slate-100 rounded-3xl mt-4 lg:mt-7 '>
            <div className='max-w-xl'>
                <h1 className='text-3xl lg:text-5xl font-bold lg:leading-normal mb-5 lg:mb-8'>Books to freshen <br /> up your bookshelf</h1>
                <button className='btn lg:px-5 bg-[#23BE0A] text-white hover:text-black text-lg font-bold'>View The List</button>
            </div>
            <div >
                <img className='h-40 lg:h-full' src={bannerBookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
