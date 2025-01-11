import { Link } from 'react-router-dom';
import '../shared.css';

const DessertsCount = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>You bought desserts x times in 2024.</h1>
                    <h2>Your top month was x with x desserts!</h2>
                    <Link to='/top-dessert'>Let's take a look at your top dessert stores...</Link>
                </div>
            </main>
        </>
    )
};

export default DessertsCount;