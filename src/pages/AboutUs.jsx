import { GoDotFill } from "react-icons/go";

const AboutUs = () => {
    return (
        <div className="mt-5 px-3 lg:px-0">
            {/* upper part */}
            <div className="pb-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold">About Us</h3>
        <p className="max-w-4xl mx-auto text-center mt-2">“Welcome to <span className="font-bold">Book Vibe</span> , where every story finds its reader! Our passion is to bring books and readers together, offering a curated collection of timeless classics, contemporary favorites, and hidden gems.</p>
      </div>
      {/* lower part */}
      <div className="mt-4 lg:mt-8">
        <div>
            <p className="font-bold">1. Our Story:</p>
            <div className="lg:pl-12">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Founding:</p>
                
                <p>“Founded in 2022, <span className="font-bold">Book Vibe</span> began as a small dream to share our love for books with the world. What started as a local independent shop has grown into a thriving online community for readers and authors alike.”</p>
            </div>
            <div className="lg:pl-12 mt-2">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Vision:</p>
                
                <p>“Our mission is to create a haven for book lovers where they can discover new stories, find inspiration, and connect with others who share their passion for reading.”</p>
            </div>
        </div>
        {/* div2 */}
        <div>
            <p className="font-bold">2. Our Values:</p>
            <div className="lg:pl-12">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Community:</p>
                
                <p>“At <span className="font-bold">Book Vibe</span>, we believe in the power of community. Whether it’s through our local events, book clubs, or online discussions, we strive to connect readers and spark meaningful conversations.”</p>
            </div>
            <div className="lg:pl-12 mt-2">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Diversity and Inclusion:</p>
                
                <p>“We are committed to celebrating diverse voices and stories. Our collection features books from all genres, written by authors from different backgrounds, ensuring everyone finds something to connect with.”</p>
            </div>
            <div className="lg:pl-12 mt-2">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Sustainability:</p>
                
                <p>“We’re dedicated to sustainable practices. From our eco-friendly packaging to supporting independent and small-press authors, we aim to make a positive impact.”

</p>
            </div>
        </div>
        {/* div3 */}
        <div>
            <p className="font-bold">3. Why Shop With Us?</p>
            <div className="lg:pl-12">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Unique Collection:</p>
                
                <p>“We take pride in offering a carefully curated selection of books that you won’t always find in big box stores. From indie authors to rare editions, we’re constantly on the lookout for titles that surprise and inspire.”</p>
            </div>
            <div className="lg:pl-12 mt-2">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Personalized Recommendations:</p>
                
                <p>“Our personalized recommendation service ensures that you find the books that match your taste, whether you're a mystery buff, a fantasy fan, or a literary fiction lover.”</p>
            </div>
            
        </div>
        {/* div4 */}
        <div>
            <p className="font-bold">4. Supporting Authors:</p>
            <div className="lg:pl-12">
                <p className="flex gap-1 items-center font-semibold"><GoDotFill></GoDotFill>Author Collaborations:</p>
                
                <p>“We love working with authors! Our bookstore regularly hosts virtual and in-store events to introduce you to new and beloved writers.”</p>
            </div>
            
            <div className="my-4 lg:my-8 font-semibold text-center text-[#23BE0A]">
                <p><i>“Thank you for being part of our journey. We invite you to explore our collection, join our community, and share your love of reading with us!”</i></p>
            </div>
        </div>
      </div>
        </div>
    );
};

export default AboutUs;