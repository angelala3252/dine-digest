import { Link } from 'react-router-dom';
import '../shared.css';

const Home = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your 2024 Food Recap</h1>
                    <Link>Meals</Link>
                    <Link>Desserts</Link>
                </div>
            </main>
        </>
    )
};

export default Home;