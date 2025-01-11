import { Link } from 'react-router-dom';
import '../shared.css';

const MealsHome = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Hi ;Dian, are you ready to see your 2024 restaurant stats?</h1>
                    <div className='button'>
                        <Link to='/meals-count'>Let's go!</Link>
                    </div>
                </div>
            </main>
        </>
    )
};

export default MealsHome;