import { Link } from 'react-router-dom';
import '../shared.css';

const Home = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your 2024 Food Recap</h1>
                    <Link to="/meals-home">Meals</Link>
                    <Link to='/desserts-home'>Desserts</Link>
                </div>
            </main>
        </>
    )
};

export default Home;