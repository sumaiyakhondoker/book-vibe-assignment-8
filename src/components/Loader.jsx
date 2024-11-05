import { FadeLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="min-h-[calc(100vh-104px)] flex justify-center items-center">
            <FadeLoader color="#23BE0A"></FadeLoader>
        </div>
    );
};

export default Loader;