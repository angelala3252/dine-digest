import { Link } from 'react-router-dom';
import '../shared.css';

const TopDessert = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your top dessert was ... with ... visits!</h1>
                    <Link to=''>Show me my recap!</Link>
                </div>
            </main>
        </>
    )
};

export default TopDessert;