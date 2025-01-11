import { Link } from 'react-router-dom';
import '../shared.css';

const TopDessert = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your top dessert store was Butter Baker with 5 visits!</h1>
                    <p>
                        Honourable mentions include Nani's Gelato and Hitotoki 
                        Bakery, with 2 visits each!
                    </p>
                    <Link to='/dessert-recap'>Show me my recap!</Link>
                </div>
            </main>
        </>
    )
};

export default TopDessert;