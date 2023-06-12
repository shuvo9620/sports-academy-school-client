
import Banner from '../Banner/Banner';
import JoinTeam from './UpcomingEvents';
import PopularInstructor from './PopularInstructor';
import PopularClasses from './PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClasses></PopularClasses>
            <JoinTeam></JoinTeam>
        </div>
    );
};

export default Home;