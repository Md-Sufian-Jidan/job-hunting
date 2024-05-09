import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import TabCategories from "../../Components/TabCategories";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
    const { isLoading } = useContext(AuthContext);
    const jobs = useLoaderData();
    console.log(jobs);
    if (isLoading) {
        return <p className="text-7xl">Loading...</p>
    }
    return (
        <div>
            <Carousel />
            <TabCategories /> {/* jobs={jobs} */}
        </div>
    );
};

export default Home;