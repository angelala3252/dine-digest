import { Link } from 'react-router-dom';
import '../shared.css';
import './index.css'

const Home = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your 2024 Food Recap</h1>
                    <div className='button'>
                        <Link to="/meals-home">Meals</Link>
                    </div>
                    <div className='button'>
                        <Link to='/desserts-home'>Desserts</Link>
                    </div>
                </div>
            </main>
        </>
    )
};

export default Home;