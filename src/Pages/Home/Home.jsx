import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import TabCategories from "../../Components/TabCategories";

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <Carousel />
            <TabCategories /> {/* jobs={jobs} */}
        </div>
    );
};

export default Home;