import { useLoaderData } from "react-router-dom";
import Author from "./Author";


const Authors = () => {
    const authors = useLoaderData()
    console.log(authors);
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 place-content-evenly px-3 lg:px-10 my-3 lg:my-8">
        {
            authors.map(author => <Author key={author.name} author={author} ></Author>)
        }
       </div>
    );
};

export default Authors;