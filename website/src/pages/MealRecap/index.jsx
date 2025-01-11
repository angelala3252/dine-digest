import { Link } from 'react-router-dom';
import '../shared.css';
import mealsRecap from '../../images/meals-recap.png';

const MealRecap = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Meal Recap</h1>
                    <img src={mealsRecap}></img>
                </div>
            </main>
        </>
    )
};

export default MealRecap;