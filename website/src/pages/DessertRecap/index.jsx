import { Link } from 'react-router-dom';
import '../shared.css';
import dessertRecap from '../../images/dessert-recap.png';

const DessertRecap = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Dessert Recap</h1>
                    <img src={dessertRecap}></img>
                </div>
            </main>
        </>
    )
};

export default DessertRecap;