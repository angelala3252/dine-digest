import { Link } from 'react-router-dom';
import '../shared.css';

const MealsCount = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>You ate at restaurants x times in 2024.</h1>
                    <h2>Your top month was x with x meals!</h2>
                    <Link to='/top-restaurant'>Let's take a look at your top restaurants...</Link>
                </div>
            </main>
        </>
    )
};

export default MealsCount;