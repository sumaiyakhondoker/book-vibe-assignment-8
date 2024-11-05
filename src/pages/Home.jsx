
import { useNavigation } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";
import Loader from "../components/Loader";

const Home = () => {
    const navigation = useNavigation()
  if(navigation.state === 'loading') return <Loader></Loader>
    
    
    return (
        <div className="p-3 lg:p-0">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;